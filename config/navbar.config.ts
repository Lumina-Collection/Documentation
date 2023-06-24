import { Navbar } from "@docusaurus/theme-common";

// don't specify style or hideOnScroll here, we want it to be dynamic
const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
  logo: {
    src: "img/lumina-collection-long-42.png",
    srcDark: "img/lumina-collection-long-42.png",
    height: 42, // when changing here, also change css
    width: 121,
    alt: "Lumina Collection Docs",
  },
  items: [
    {
      type: "dropdown",
      label: "Rollbound",
      to: "/rollbound",
      position: "left",
      activeBaseRegex: "\\/rollbound.*",
      items: [
        {
          label: "Administration",
          to: "/rollbound/admin",
          activeBaseRegex: "\\/rollbound/(?!usage).*",
        },
        {
          label: "Usage",
          to: "/rollbound/usage",
          activeBaseRegex: "\\/rollbound\\/usage.*",
        },
      ],
    },
    {
      type: "dropdown",
      label: "Nameshift",
      to: "/nameshift",
      position: "left",
      activeBaseRegex: "(\\/nameshift)(.+)?",
      items: [
        {
          label: "Administration",
          to: "/nameshift/admin",
          activeBaseRegex: "(\\/nameshift/)(?!usage)(.+)?",
        },
        {
          label: "Usage",
          to: "/nameshift/usage",
          activeBaseRegex: "\\/nameshift\\/usage.*",
        },
      ],
    },
    {
      type: "docsVersionDropdown",
      docsPluginId: "rollbound",
      position: "right",
    },
    {
      href: "https://github.com/Lumina-Collection",
      className: "header-icon-link header-github-link",
      position: "right",
    },
  ],
};

export default navbar;
