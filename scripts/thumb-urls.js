const fs = require('fs');
const glob = require('glob');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const files = glob.sync(path.join(buildDir, '**/index.html'));

for (const file of files) {
  const urlPathname = path
    .relative(buildDir, file)
    .split(path.sep)
    .join('/')
    .replace(/\/index.html$/, '');
  if (urlPathname.endsWith('/search')) {
    continue;
  }
  const html = fs.readFileSync(file, { encoding: 'utf-8' });
  fs.writeFileSync(
    file,
    html.replace(
      /https:\/\/docs.wokwi.com(\/[^/]+)?\/img\/wokwi-book\.jpg/g,
      `https://thumbs.wokwi.com/docs/${urlPathname}/thumbnail.png`,
    ),
  );
}
