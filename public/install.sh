#!/usr/bin/env bash
set -euo pipefail

VERSION="0.1.0"
INSTALL_DIR="$HOME/.local/bin"
CLI_NAME="moureau"
SKILL_DIR="moureau-dev"

ZSH_COMP="$HOME/.zsh/completions/_moureau"
BASH_COMP="$HOME/.local/share/bash-completion/completions/moureau"

SKILL_URL="https://moureau.dev/cli/skill.md"
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
SKILL_URL="$SKILL_URL"
INSTALLER_URL="$INSTALLER_URL"
INSTALL_DIR="$INSTALL_DIR"
CLI_NAME="$CLI_NAME"
SKILL_DIR="$SKILL_DIR"
ZSH_COMP="$ZSH_COMP"
BASH_COMP="$BASH_COMP"
SKILL_ENVS=(.claude .agents .config/opencode)

green_print() { printf "\033[0;32m%s\033[0m\n" "\$1"; }
blue_print()  { printf "\033[0;34m%s\033[0m\n" "\$1"; }
red_print()   { printf "\033[0;31m%s\033[0m\n" "\$1"; }

do_sync() {
  blue_print "[⋯] syncing skills..."

  tmp=\$(mktemp)

  if curl -fsSL "\$SKILL_URL" -o "\$tmp"; then
    for env in "\${SKILL_ENVS[@]}"; do
      mkdir -p "\$HOME/\${env}/skills/\$SKILL_DIR"
      cp "\$tmp" "\$HOME/\${env}/skills/\$SKILL_DIR/SKILL.md"
    done
    green_print "[✓] skills synced"
  else
    red_print "[✗] failed to download skills"
  fi

  rm -f "\$tmp"
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

  for env in "\${SKILL_ENVS[@]}"; do
    rm -rf "\$HOME/\${env}/skills/\$SKILL_DIR"
  done

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
  printf "  sync      Sync AI skills\n"
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
