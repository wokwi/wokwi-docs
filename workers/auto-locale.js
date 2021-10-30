/* 
  Automatically redirect users to their native language documentation, if available, based on the Accept-Language header 
  sent from their browser. Runs on Cloudflare Workers.

  Copyright (C) 2021, Uri Shaked. 
  Released under the terms of the MIT license.
*/
/* SPDX-License-Identifier: MIT */

const docsUrl = 'https://docs.wokwi.com';

function getLanguages(request) {
  const acceptLanguage = request.headers.get('Accept-Language');
  const result = [];
  for (const item of (acceptLanguage ?? '').split(',')) {
    const [lang, rest] = item.split(';');
    const quality = (rest ?? '').startsWith('q=') ? parseFloat(rest.substr(2)) : 1;
    result.push({ lang, quality });
  }
  return result;
}

function pickLanguage(langs, supportedLangs, defaultLang) {
  langs = [...langs].sort((a, b) => b.quality - a.quality);
  for (const { lang, quality } of langs) {
    if (supportedLangs.includes(lang)) {
      return { lang, quality };
    }
  }
  return { lang: defaultLang, quality: 0 };
}

addEventListener('fetch', (event) => {
  event.respondWith(
    handleRequest(event.request).catch((err) => new Response(err.stack, { status: 500 })),
  );
});

async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  const referer = request.headers.get('Referer');
  const secFetchSite = request.headers.get('Sec-Fetch-Site');
  const { lang } = pickLanguage(getLanguages(request), ['pt-BR', 'pt', 'en'], 'en');

  if (secFetchSite !== 'same-origin' && (!referer || !referer.startsWith(docsUrl))) {
    if (
      lang.startsWith('pt') &&
      !pathname.startsWith('/pt-BR/') &&
      !pathname.startsWith('/assets/')
    ) {
      return Response.redirect(`${docsUrl}/pt-BR${pathname}`);
    }
  }

  return fetch(request);
}
