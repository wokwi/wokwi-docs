module.exports = {
  title: 'Wokwi Docs',
  tagline: 'Online Arduino & Electronics Simulator',
  url: 'https://docs.wokwi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wokwi',
  projectName: 'wokwi-docs',
  scripts: [
    {
      src: 'https://unpkg.com/@wokwi/elements@0.57.2/dist/wokwi-elements.bundle.js',
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
          type: 'localeDropdown',
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
      copyright: `Copyright © ${new Date().getFullYear()} CodeMagic LTD. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: '1f2bf1b3e5049e68f0d014abd016cf8f',
      indexName: 'wokwi',
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
          editUrl: 'https://github.com/wokwi/wokwi-docs/edit/master/',
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
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
      },
      'zh-CN': {
        label: 'Chinese',
      },
    },
  },
};
