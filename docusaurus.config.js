// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Piracy",
  tagline: "It's illegal cuz they can't tax you!",
  url: "https://bajakan.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "xuac",
  projectName: "bajakan",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ogimage.png",
      autoCollapseSidebarCategories: true,
      navbar: {
        title: "Piracy",
        logo: {
          alt: "",
          src: "img/logo.svg",
          srcDark: "img/darklogo.svg",
        },
        items: [
          {
            href: "https://github.com/ZetsKP/Bajakan",
            label: "GitLab",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-131672698-5",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "UA-131672698-5",
          anonymizeIP: true,
        },
      }),
    ],
  ],
};

module.exports = config;
