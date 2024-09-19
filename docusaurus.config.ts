import type { Config } from '@docusaurus/types';
import { resolve } from 'node:path';
import { themes } from 'prism-react-renderer';

// constants
import {
  AGORA_LABS_LINK,
  GITHUB_LINK,
  KIBISIS_LINK,
  REPORT_A_BUG_LINK,
  SUGGEST_A_FEATURE_LINK,
  X_LINK,
} from './src/constants';

// directories
const nodeModulesDir = resolve(__dirname, 'node_modules');
const srcDir = resolve(__dirname, 'src');
const staticDir = resolve(__dirname, 'static');
const stylesDir = resolve(srcDir, 'styles');

// application
const tagline = 'Not just for DeFi';
const title = 'Kibisis';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  favicon: 'images/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'agoralabs-sh ',
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {
                sync: true,
              },
            ],
          ],
          routeBasePath: '/',
          sidebarPath: require.resolve(resolve(__dirname, 'sidebars.js')),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve(resolve(stylesDir, 'button.scss')),
            require.resolve(resolve(stylesDir, 'footer.scss')),
            require.resolve(resolve(stylesDir, 'global.scss')),
            // vendor
            require.resolve(
              resolve(
                nodeModulesDir,
                'react-responsive-carousel',
                'lib',
                'styles',
                'carousel.min.css'
              )
            ),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  projectName: 'kibisis-website',
  staticDirectories: [staticDir],
  tagline: tagline,
  themeConfig: {
    image: 'images/social_card.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'algorand, algosdk, blockchain, browser, chrome, cryptocurrency, edge, firefox, opera, voi, wallet',
      },
    ],
    navbar: {
      logo: {
        alt: 'Kibisis Site Logo',
        src: 'images/logo.svg',
        srcDark: 'images/logo-dark.svg',
      },
      items: [
        // right
        {
          items: [
            {
              label: 'Download',
              href: '/#download',
            },
            {
              label: 'Concepts',
              href: '/#concepts',
            },
            {
              label: 'Features',
              href: '/#features',
            },
          ],
          label: 'Overview',
          position: 'right',
        },
        {
          label: 'Blog',
          position: 'right',
          to: '/blog',
        },
        {
          label: 'Learn',
          position: 'right',
          sidebarId: 'docsSidebar',
          type: 'docSidebar',
        },
      ],
      title: title,
    },
    footer: {
      copyright: `
<div class="footer__copyright-container">
    <p class="footer__text">Licensed under <a class="footer__text--link" href="${GITHUB_LINK}/blob/main/LICENSE" target="_blank">GNU AGPL-3.0</a>. Icons provided by <a class="footer__text--link" href="https://www.flaticon.com/" target="_blank">flaticon</a>.</p>
</div>
        `,
      logo: {
        alt: 'Agora Labs logo',
        height: '50px',
        href: AGORA_LABS_LINK,
        src: '/images/developed_by_agora_labs_banner.svg',
        target: '_blank',
      },
      links: [
        {
          title: title,
          items: [
            {
              label: 'Download',
              href: '/#download',
            },
            {
              label: 'Concepts',
              href: '/#concepts',
            },
            {
              label: 'Features',
              href: '/#features',
            },
          ],
        },
        {
          title: 'Learn More',
          items: [
            {
              label: 'Documentation',
              to: '/overview',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              html: `
<div class="footer__icon-container">
  <a class="footer__icon-link" href="${GITHUB_LINK}" target="_blank">
    <svg
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
    </svg>
  </a>
  <a class="footer__icon-link" href="${X_LINK}" target="_blank">
    <svg
      viewBox="0 0 1200 1227"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  </a>
</div>
                `,
            },
          ],
        },
        {
          title: 'Get Involved',
          items: [
            {
              label: 'Report a bug',
              href: REPORT_A_BUG_LINK,
            },
            {
              label: 'Suggest a feature',
              href: SUGGEST_A_FEATURE_LINK,
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              to: '/privacy-policy',
            },
          ],
        },
      ],
      style: 'dark',
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
  title: title,
  trailingSlash: false,
  url: KIBISIS_LINK,
};

export default config;
