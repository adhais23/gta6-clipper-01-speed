// gta6-clipper-01 — Speed entry (Node 22, standard library only).
//
// The video is the entry, and this program is the courier that hands its
// address to the grader. It looks for VIDEO.json at the root of the
// repository, makes sure the file parses and carries a non-empty string
// under the key "url", then copies that file unchanged into the output
// directory the grader reads.
//
// The gate itself checks that the address names a real public YouTube
// video; this program does not judge the video, it only hands the file
// over, so a placeholder address still copies through and the gate
// refuses it there. The three address shapes the gate accepts:
//   https://www.youtube.com/shorts/<11-char id>
//   https://www.youtube.com/watch?v=<11-char id>
//   https://youtu.be/<11-char id>
//
// The Speed clip this entry submits is cut from IShowSpeed's GTA 6 launch
// VOD; the address above is swapped for the published Short right after
// the upload, before the entry is submitted.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function die(message: string): never {
  console.error(message);
  process.exit(1);
}

function main(): void {
  const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const videoJsonPath = join(repoDir, 'VIDEO.json');

  if (!existsSync(videoJsonPath)) {
    die('VIDEO.json is missing from the repository root');
  }

  const text = readFileSync(videoJsonPath, 'utf8');

  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    die('VIDEO.json is not valid JSON');
  }

  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    die('VIDEO.json must hold a JSON object');
  }

  const address = (data as { url?: unknown }).url;
  if (typeof address !== 'string' || address.trim().length === 0) {
    die('VIDEO.json must hold a non-empty string "url"');
  }

  mkdirSync(outDir, { recursive: true });
  const targetPath = join(outDir, 'VIDEO.json');
  copyFileSync(videoJsonPath, targetPath);
  console.log(`VIDEO.json copied to ${targetPath} (url: ${address})`);
}

main();
