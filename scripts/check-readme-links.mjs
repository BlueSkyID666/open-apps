#!/usr/bin/env node
/**
 * README → detail pages. Every app link in README.md that points at this
 * site's directory must have a built page in dist/. Whether that page is
 * indexable is `grove seo`'s job (it checks every record page against the
 * index policy); this only reports the split.
 *
 * Usage: `pnpm build && node scripts/check-readme-links.mjs`
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const siteConfig = JSON.parse(readFileSync('data/generated/site-config.json', 'utf8'));
const siteUrl = siteConfig.siteUrl?.replace(/\/$/, '');
const routeSlug = siteConfig.blueprintConfig?.routeSlug ?? 'projects';
const base = `${siteUrl}/${routeSlug}/`;

const links = [
  ...new Set(
    [...readFileSync('README.md', 'utf8').matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)]
      .map((m) => m[1])
      .filter((url) => url.startsWith(base) && url !== base),
  ),
];

const errors = [];
let indexable = 0;
let noindex = 0;
for (const url of links) {
  const path = new URL(url).pathname.replace(/\/?$/, '/');
  const file = join('dist', path, 'index.html');
  if (!existsSync(file)) {
    errors.push(`README: ${url} has no page in dist/`);
    continue;
  }
  const robots = readFileSync(file, 'utf8').match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? '';
  if (/noindex/i.test(robots)) noindex += 1;
  else indexable += 1;
}

for (const error of errors) console.error(`error ${error}`);
console.log(`readme-links: ${links.length} detail link(s): ${indexable} indexable, ${noindex} noindex, ${errors.length} error(s).`);
process.exit(errors.length > 0 ? 1 : 0);
