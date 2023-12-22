// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

const DefaultLocale = 'en';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Famedly Help Center',
  tagline: 'We are here to make your work easier',
  url: 'https://famedly.github.io',
  baseUrl: '/helpcenter/',
  projectName: 'helpcenter',
  organizationName: 'famedly',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // Link to Crowdin for localized docs
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/famedly-helpcenter/${locale}`;
            }
            // Link to GitHub for english docs
            return `https://github.com/famedly/helpcenter/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            // Filters index files out of the sidebar
            let items = await defaultSidebarItemsGenerator(args);
            items = items.filter((e) => !(e.type === 'doc' && e.id.endsWith('index')));
            return items;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        hideOnScroll: false,
        title: 'Famedly',
        logo: {
          alt: 'Famedly Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'help-center/first-steps/index',
            position: 'left',
            label: 'Help Center',
          },
          {
            type: 'doc',
            docId: 'api/index',
            position: 'left',
            label: 'API',
          },
          {
            to: 'https://famedly.com/',
            label: 'Website',
            position: 'right',
          },
          {
            to: 'https://github.com/famedly',
            label: 'Github',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Famedly GmbH`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'B1OKEYLEHC',
        apiKey: 'c5698a85503a72bd60573f81514fc7a5',
        indexName: 'helpcenter',
        container: 'div#',
        insights: true,
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
      },
    }),

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'de'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        de: {
          label: 'Deutsch',
        },
      },
    },
};

module.exports = config;
