import { execSync } from 'child_process';

function getCommitSha() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    return 'unknown';
  }
}

module.exports = {
  title: 'Wokwi Docs',
  tagline: 'Online Arduino & Electronics Simulator',
  url: 'https://docs.wokwi.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon-auto.svg',
  organizationName: 'wokwi',
  projectName: 'wokwi-docs',
  scripts: [
    {
      src: 'https://unpkg.com/@wokwi/elements@1.9.1/dist/wokwi-elements.bundle.js',
      async: true,
    },
  ],
  themeConfig: {
    image: 'img/wokwi-book.jpg',
    metadata: [
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    navbar: {
      title: 'Wokwi',
      logo: {
        alt: 'Wokwi Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
        href: 'https://wokwi.com',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://blog.wokwi.com',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://wokwi.com',
          label: 'Simulator',
          className: 'simulator-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: '/',
            },
            {
              label: 'diagram.json',
              to: '/diagram-format',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://wokwi.com/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/WokwiMakes',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.wokwi.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wokwi/wokwi-docs',
            },
          ],
        },
      ],
      copyright: `
        Copyright © 2021-${new Date().getFullYear()} CodeMagic LTD.
        <small>Built with Docusaurus at ${new Date().toISOString()}, commit sha ${getCommitSha()}.</small>
      `,
    },
    algolia: {
      appId: 'VNOAE1ADJ6',
      apiKey: 'cf8c02a00fa23ba42725ac0fc3a10a3d',
      indexName: 'wokwi',
    },
    prism: {
      additionalLanguages: ['rust'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/wokwi/wokwi-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PHBY8B943B',
          anonymizeIP: true,
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
    },
  },
};
