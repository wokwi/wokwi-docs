// Renders a social preview image for every page of the build and points the page's
// og:image / twitter:image at it, so link previews don't depend on an external renderer.
import { Resvg } from '@resvg/resvg-js';
import crypto from 'crypto';
import fs from 'fs';
import { globSync } from 'glob';
import { createRequire } from 'module';
import path from 'path';
import satori from 'satori';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(rootDir, 'build');
const thumbnailDir = 'img/social';
// Workers Builds keeps node_modules/.cache between Docusaurus builds when the build cache is enabled
const cacheDir = path.join(rootDir, 'node_modules/.cache/social-thumbnails');
const siteUrl = 'https://docs.wokwi.com';
const width = 1200;
const height = 630;

const fonts = [400, 700].map((weight) => ({
  name: 'Inter',
  weight,
  style: 'normal',
  data: fs.readFileSync(
    require.resolve(`@fontsource/inter/files/inter-latin-${weight}-normal.woff`),
  ),
}));

const backgroundPng = fs.readFileSync(path.join(rootDir, 'static/img/social-thumbnail.png'));
const background = `data:image/png;base64,${backgroundPng.toString('base64')}`;

// Anything that changes the pixels: this script, its inputs and the renderers
const templateHash = crypto
  .createHash('sha256')
  .update(fs.readFileSync(fileURLToPath(import.meta.url)))
  .update(backgroundPng)
  .update(Buffer.concat(fonts.map((font) => font.data)))
  .update(require('satori/package.json').version)
  .update(require('@resvg/resvg-js/package.json').version)
  .digest('hex');

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function metaContent(html, attr, name) {
  const match = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`));
  return match ? decodeEntities(match[1]) : '';
}

function pageInfo(html) {
  const title = metaContent(html, 'property', 'og:title').replace(/ \| Wokwi Docs$/, '');
  const description = metaContent(html, 'name', 'description');
  // The breadcrumb before the page itself names its section ("Diagram Reference", "Guides")
  const crumbs = [...html.matchAll(/class="breadcrumbs__link"[^>]*>([^<]+)</g)].map((m) =>
    decodeEntities(m[1]),
  );
  const section = crumbs.length > 1 ? crumbs[crumbs.length - 2] : '';
  return { title, description, section };
}

const div = (style, children) => ({ type: 'div', props: { style, children } });

function thumbnail({ title, description, section, urlPath }) {
  return div(
    {
      width,
      height,
      display: 'flex',
      backgroundImage: `url(${background})`,
      fontFamily: 'Inter',
    },
    // The white panel of the background spans x 267-963; the accent line sits at y 131.
    div(
      {
        position: 'absolute',
        left: 316,
        top: 160,
        width: 600,
        height: 430,
        display: 'flex',
        flexDirection: 'column',
      },
      [
        div(
          {
            fontSize: 24,
            fontWeight: 700,
            color: '#8e44ad',
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 12,
          },
          section || ' ',
        ),
        div(
          {
            display: 'block',
            fontSize: title.length > 24 ? 44 : 56,
            fontWeight: 700,
            color: '#1c1e21',
            lineHeight: 1.15,
            lineClamp: 3,
          },
          title,
        ),
        div(
          {
            display: 'block',
            fontSize: 28,
            color: '#555',
            lineHeight: 1.4,
            marginTop: 20,
            lineClamp: 4,
          },
          description,
        ),
        div(
          { marginTop: 'auto', fontSize: 22, color: '#888' },
          `docs.wokwi.com${urlPath === '/' ? '' : urlPath}`,
        ),
      ],
    ),
  );
}

async function renderThumbnail(page) {
  const key = crypto.createHash('sha256').update(templateHash).update(JSON.stringify(page));
  const cacheFile = path.join(cacheDir, `${key.digest('hex')}.png`);
  if (fs.existsSync(cacheFile)) {
    return { png: fs.readFileSync(cacheFile), cached: true };
  }
  const svg = await satori(thumbnail(page), { width, height, fonts });
  const png = new Resvg(svg).render().asPng();
  fs.writeFileSync(cacheFile, png);
  return { png, cached: false };
}

const files = globSync('**/*.html', { cwd: buildDir, ignore: ['404.html', 'search.html'] });
fs.mkdirSync(cacheDir, { recursive: true });
let cachedCount = 0;

for (const file of files) {
  // build/parts/wokwi-led.html is served at /parts/wokwi-led, build/index.html at /
  const urlPath =
    '/' +
    file
      .split(path.sep)
      .join('/')
      .replace(/(^|\/)index\.html$/, '')
      .replace(/\.html$/, '');
  const imagePath = `${thumbnailDir}${urlPath === '/' ? '/index' : urlPath}.png`;
  const htmlFile = path.join(buildDir, file);
  const html = fs.readFileSync(htmlFile, 'utf-8');
  fs.mkdirSync(path.dirname(path.join(buildDir, imagePath)), { recursive: true });
  const { png, cached } = await renderThumbnail({ ...pageInfo(html), urlPath });
  if (cached) {
    cachedCount++;
  }
  fs.writeFileSync(path.join(buildDir, imagePath), png);
  fs.writeFileSync(
    htmlFile,
    html.replace(
      /https:\/\/docs\.wokwi\.com\/img\/wokwi-book\.jpg/g,
      `${siteUrl}/${imagePath}`,
    ),
  );
}

console.log(
  `Social thumbnails: ${
    files.length - cachedCount
  } rendered, ${cachedCount} from cache, in build/${thumbnailDir}`,
);
