import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const SITE_ORIGIN = 'https://jayidev.tech';
const DIST_DIR = 'dist';
const SITEMAP_PATH = 'static/sitemap.xml';

function extractPathnamesFromSitemap(xml) {
  const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());

  return locMatches
    .map((loc) => {
      try {
        const url = new URL(loc);

        if (url.origin !== SITE_ORIGIN) {
          return null;
        }

        const normalizedPath = url.pathname.replace(/\/$/, '') || '/';
        return normalizedPath;
      } catch {
        return null;
      }
    })
    .filter((pathname) => pathname && pathname !== '/');
}

async function ensureFileExists(path) {
  await access(path, constants.F_OK);
}

async function main() {
  const distIndexPath = join(DIST_DIR, 'index.html');

  await ensureFileExists(distIndexPath);

  const [sitemapXml, indexHtml] = await Promise.all([
    readFile(SITEMAP_PATH, 'utf8'),
    readFile(distIndexPath, 'utf8')
  ]);

  const routePaths = extractPathnamesFromSitemap(sitemapXml);

  if (routePaths.length === 0) {
    console.log('No extra sitemap routes found. Skipping static SPA route generation.');
    return;
  }

  await Promise.all(
    routePaths.map(async (routePath) => {
      const safePath = routePath.replace(/^\//, '');
      const routeDir = join(DIST_DIR, safePath);
      const routeIndexFile = join(routeDir, 'index.html');

      await mkdir(routeDir, { recursive: true });
      await writeFile(routeIndexFile, indexHtml, 'utf8');
    })
  );

  console.log(`Generated static SPA route pages: ${routePaths.join(', ')}`);
}

main().catch((error) => {
  console.error('Failed to generate static SPA route pages.', error);
  process.exit(1);
});
