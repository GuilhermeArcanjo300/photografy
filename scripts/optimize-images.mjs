/**
 * Generates optimized WebP derivatives from the photographer's original files.
 *
 * The originals in src/assets/img/photograph are never modified — this only
 * writes new files into src/assets/img/optimized. Re-run with `npm run images`
 * after adding new photos.
 */
import { mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'src/assets/img/photograph');
const OUT = join(root, 'src/assets/img/optimized');

/** Max width per role. Hero images stay large; gallery cards can be smaller. */
const WIDTHS = {
  'slide-1': 2200,
  'shoots-main': 2200,
  profile: 1200,
  default: 1100,
};

const isImage = (f) => /\.(jpe?g|png)$/i.test(f);

async function run() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter(isImage);

  let before = 0;
  let after = 0;

  for (const file of files) {
    const { name } = parse(file);
    const from = join(SRC, file);
    const to = join(OUT, `${name}.webp`);
    const width = WIDTHS[name] ?? WIDTHS.default;

    const original = await stat(from);
    await sharp(from)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(to);
    const optimized = await stat(to);

    before += original.size;
    after += optimized.size;

    const kb = (n) => `${(n / 1024).toFixed(0)}kB`;
    const saved = (100 - (optimized.size / original.size) * 100).toFixed(0);
    console.log(
      `${file.padEnd(18)} ${kb(original.size).padStart(8)} -> ${kb(optimized.size).padStart(7)} (-${saved}%)`,
    );
  }

  const mb = (n) => `${(n / 1024 / 1024).toFixed(2)}MB`;
  console.log(
    `\nTotal: ${mb(before)} -> ${mb(after)} (-${(100 - (after / before) * 100).toFixed(0)}%)`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
