import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { themes } from "prism-react-renderer";
import isCI from "is-ci";
import navbar from "./config/navbar.config";
import footer from "./config/footer.config";
import { env } from "process";
import { Config } from "@docusaurus/types";
import { Options } from "@docusaurus/plugin-content-docs";

const url = "https://docs.luminacollection.net";

const docsCommon: Options = {
  breadcrumbs: true,
  editUrl: ({ versionDocsDirPath, docPath }) =>
    `https://github.com/Lumina-Collection/Documentation/blob/main/${versionDocsDirPath}/${docPath}`,
  editCurrentVersion: true,
  remarkPlugins: [remarkA11yEmoji],
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

const config: Config = {
  title: "Lumina Collection Documentation",
  tagline:
    "Documentation for plugins inside the Lumina Collection.",
  url: url,
  baseUrl: "/",
  onBrokenLinks: isCI ? "throw" : "warn",
  onBrokenMarkdownLinks: isCI ? "throw" : "warn",
  onDuplicateRoutes: isCI ? "throw" : "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  baseUrlIssueBanner: false,
  clientModules: [
    require.resolve("./src/css/custom.css"),
    require.resolve("@fontsource/jetbrains-mono/index.css"),
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        target: isServer ? "node12" : "es2017",
      },
    }),
  },

  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        url,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }),
    },
  ],

  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },

  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-search-algolia"],

  plugins: [
    [
      "content-docs",
      {
        ...docsCommon,
        id: "rollbound",
        path: "docs/rollbound",
        routeBasePath: "rollbound",
        sidebarPath: require.resolve("./config/sidebar.rollbound"),
        lastVersion: "current",
        versions: {
          current: {
            label: "1.0",
            path: "",
          },
        },
      },
    ],
    [
      "content-docs",
      {
        ...docsCommon,
        id: "nameshift",
        path: "docs/nameshift",
        routeBasePath: "nameshift",
        sidebarPath: require.resolve("./config/sidebar.nameshift"),
        lastVersion: "current",
        versions: {
          current: {
            label: "1.0",
            path: "",
          },
        },
      },
    ],
    [
      "content-pages",
      {
        remarkPlugins: [remarkA11yEmoji],
      },
    ],
    [
      "pwa",
      {
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/lumina-collection.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(0, 78, 233)",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        ignorePatterns: ["**/cat/**"],
      },
    ],
    "@docusaurus/plugin-debug",
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: "img/lumina-collection.png",
    metadata: [
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:image:alt",
        content: "Lumina Collection Logo",
      },
    ],
    navbar: navbar,
    footer: footer,
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      additionalLanguages: [
        "batch",
        "bash",
        "git",
        "java",
        "javastacktrace",
        "kotlin",
        "groovy",
        "log",
        "toml",
        "properties",
      ],
      theme: themes.vsDark,
    },
    algolia: {
      appId: "34DICCK4P9",
      apiKey: "b03e0f4944efb11549201a3923c6b81f",
      indexName: "luminacollection",
      contextualSearch: true,
    },
  },
};

export = config;
