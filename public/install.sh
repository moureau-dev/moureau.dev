#!/usr/bin/env bash
set -euo pipefail

VERSION="0.2.0"
INSTALL_DIR="$HOME/.local/bin"
CLI_NAME="moureau"
DEVKIT_DIR="$HOME/.moureau"
DEVKIT_REPO="git@github.com:moureau-dev/devkit.git"
SKILL_DIR="moureau-dev"

ZSH_COMP="$HOME/.zsh/completions/_moureau"
BASH_COMP="$HOME/.local/share/bash-completion/completions/moureau"

INSTALLER_URL="https://moureau.dev/install.sh"

# ----------------------------
# PRINT HELPERS
# ----------------------------
green_print() { printf "\033[0;32m%s\033[0m\n" "$1"; }
blue_print()  { printf "\033[0;34m%s\033[0m\n" "$1"; }
red_print()   { printf "\033[0;31m%s\033[0m\n" "$1"; }

blue_print "[⋯] installing $CLI_NAME..."

mkdir -p "$INSTALL_DIR"

# ----------------------------
# INSTALL CLI
# ----------------------------
cat > "$INSTALL_DIR/$CLI_NAME" <<OUTER
#!/usr/bin/env bash
set -euo pipefail

VERSION="$VERSION"
DEVKIT_DIR="$DEVKIT_DIR"
DEVKIT_REPO="$DEVKIT_REPO"
INSTALL_DIR="$INSTALL_DIR"
CLI_NAME="$CLI_NAME"
SKILL_DIR="$SKILL_DIR"
ZSH_COMP="$ZSH_COMP"
BASH_COMP="$BASH_COMP"
INSTALLER_URL="$INSTALLER_URL"
SKILL_ENVS=(.claude .agents .config/opencode .pi/agent)

green_print() { printf "\033[0;32m%s\033[0m\n" "\$1"; }
blue_print()  { printf "\033[0;34m%s\033[0m\n" "\$1"; }
red_print()   { printf "\033[0;31m%s\033[0m\n" "\$1"; }

do_sync() {
  blue_print "[⋯] syncing devkit..."

  if [ -d "\$DEVKIT_DIR" ]; then
    git -C "\$DEVKIT_DIR" pull --ff-only
  else
    git clone --depth 1 "\$DEVKIT_REPO" "\$DEVKIT_DIR"
  fi

  # --- skills ---
  for env in "\${SKILL_ENVS[@]}"; do
    target="\$HOME/\$env/skills/\$SKILL_DIR"
    mkdir -p "\$target"
    ln -sf "\$DEVKIT_DIR/skills/\$SKILL_DIR.md" "\$target/SKILL.md"
  done

  # --- commands (prompt templates for all agents) ---
  # pi → .pi/agent/prompts  |  claude → .claude/commands  |  opencode → .config/opencode/prompts
  COMMAND_DIRS=(
    "\$HOME/.pi/agent/prompts"
    "\$HOME/.claude/commands"
    "\$HOME/.config/opencode/prompts"
  )
  for target_dir in "\${COMMAND_DIRS[@]}"; do
    mkdir -p "\$target_dir"
    for cmd in "\$DEVKIT_DIR"/commands/*.md; do
      [ -f "\$cmd" ] || continue
      ln -sf "\$cmd" "\$target_dir/\$(basename "\$cmd")"
    done
  done

  # --- tools (synced to all agents) ---
  TOOL_DIRS=(
    "\$HOME/.pi/agent/tools"
    "\$HOME/.claude/tools"
    "\$HOME/.config/opencode/tools"
  )
  for tools_target in "\${TOOL_DIRS[@]}"; do
    mkdir -p "\$tools_target"
    for tool_dir in "\$DEVKIT_DIR"/tools/*/; do
      [ -d "\$tool_dir" ] || continue
      tool_name=\$(basename "\$tool_dir")
      target="\$tools_target/\$tool_name"
      [ -L "\$target" ] && rm -f "\$target"
      [ -d "\$target" ] && rm -rf "\$target"
      ln -sf "\$tool_dir" "\$target"
    done
  done

  green_print "[✓] skills, commands, and tools synced"
}

do_update() {
  blue_print "[⋯] updating moureau..."

  tmp=\$(mktemp)

  if ! curl -fsSL "\$INSTALLER_URL" -o "\$tmp"; then
    rm -f "\$tmp"
    red_print "[✗] failed to download installer"
    return 1
  fi

  if bash "\$tmp" >/dev/null; then
    rm -f "\$tmp"
    green_print "[✓] updated"
  else
    rm -f "\$tmp"
    red_print "[✗] update failed"
    return 1
  fi
}

do_uninstall() {
  blue_print "[⋯] uninstalling..."

  rm -f "\$INSTALL_DIR/\$CLI_NAME"

  # Only remove moureau-owned files, not the entire agent config directories
  for env in "\${SKILL_ENVS[@]}"; do
    rm -rf "\$HOME/\$env/skills/\$SKILL_DIR"
  done

  for prompts_dir in "\$HOME/.pi/agent/prompts" "\$HOME/.claude/commands" "\$HOME/.config/opencode/prompts"; do
    [ -d "\$prompts_dir" ] || continue
    for cmd in "\$prompts_dir"/*.md; do
      [ -L "\$cmd" ] && rm -f "\$cmd"
    done 2>/dev/null
  done

  for tools_dir in "\$HOME/.pi/agent/tools" "\$HOME/.claude/tools" "\$HOME/.config/opencode/tools"; do
    [ -d "\$tools_dir" ] || continue
    for tool in "\$tools_dir"/*; do
      [ -L "\$tool" ] && rm -f "\$tool"
    done 2>/dev/null
  done

  rm -rf "\$DEVKIT_DIR"

  rm -f "\$ZSH_COMP"
  rm -f "\$BASH_COMP"

  for profile in "\$HOME/.bashrc" "\$HOME/.zshrc"; do
    [ -f "\$profile" ] || continue
    sed -i \\
      -e '/# === moureau path setup ===/,/# === end moureau path setup ===/d' \\
      -e '/# === moureau completion setup ===/,/# === end moureau completion setup ===/d' \\
      "\$profile"
  done

  green_print "[✓] moureau has been completely removed."
  blue_print "restart your shell to drop the moureau PATH/completion changes"
}

do_help() {
  printf "\n"
  printf "moureau v%s\n" "\$VERSION"
  printf "commands:\n"
  printf "  sync      Sync skills, commands, and tools\n"
  printf "  update    Update CLI\n"
  printf "  uninstall Remove CLI\n"
  printf "  version   Show version\n"
  printf "  help      Show help\n"
  printf "\n"
}

main() {
  case "\${1:-}" in
    sync) do_sync ;;
    update) do_update ;;
    uninstall) do_uninstall ;;
    version) printf "%s\n" "\$VERSION" ;;
    help|"") do_help ;;
    *)
      red_print "[✗] unknown command: \$1"
      do_help
      ;;
  esac
}

main "\$@"
exit
OUTER

chmod +x "$INSTALL_DIR/$CLI_NAME"

# ----------------------------
# PATH SETUP
# ----------------------------
PROFILE="$HOME/.bashrc"
[[ "$SHELL" == *zsh* ]] && PROFILE="$HOME/.zshrc"

if ! grep -q "moureau path setup" "$PROFILE" 2>/dev/null; then
cat >> "$PROFILE" <<EOF

# === moureau path setup ===
export PATH="\$HOME/.local/bin:\$PATH"
# === end moureau path setup ===
EOF
fi

# ----------------------------
# COMPLETIONS
# ----------------------------
mkdir -p "$(dirname "$ZSH_COMP")"
mkdir -p "$(dirname "$BASH_COMP")"

cat > "$ZSH_COMP" <<'EOF'
#compdef moureau
_arguments '1:command:(sync update uninstall version help)'
EOF

cat > "$BASH_COMP" <<'EOF'
_moureau_completion() {
  local cur="${COMP_WORDS[COMP_CWORD]}"
  local opts="sync update uninstall version help"
  COMPREPLY=( $(compgen -W "$opts" -- "$cur") )
}
complete -F _moureau_completion moureau
EOF

# ----------------------------
# LOAD COMPLETION
# ----------------------------
if ! grep -q "moureau completion setup" "$PROFILE" 2>/dev/null; then
cat >> "$PROFILE" <<'EOF'

# === moureau completion setup ===
if [[ "$SHELL" == *zsh* ]]; then
  fpath=("$HOME/.zsh/completions" $fpath)
  autoload -Uz compinit
  compinit
elif [ -n "${BASH_VERSION:-}" ]; then
  source "$HOME/.local/share/bash-completion/completions/moureau"
fi
# === end moureau completion setup ===
EOF
fi

green_print "[✓] installed moureau"
blue_print "run: source $PROFILE"
