import { pitches } from "../src/pitches.config";
import { mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

async function copyPitches() {
  const destDir = join(process.cwd(), "public/pitches");
  await mkdir(destDir, { recursive: true });

  for (const pitch of pitches) {
    const sourcePath = join(process.cwd(), pitch.sourcePath);
    const destPath = join(destDir, `${pitch.id}.md`);
    await copyFile(sourcePath, destPath);
    console.log(`Copied ${pitch.name} pitch: ${pitch.sourcePath} -> public/pitches/${pitch.id}.md`);
  }
}

copyPitches().catch(console.error);
