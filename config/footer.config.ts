import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
  style: "dark",
  links: [
    {
      title: "Downloads",
      items: [
        {
          label: "Rollbound",
          href: "https://modrinth.com/plugin/rollbound",
        },
        {
          label: "Nameshift",
          href: "https://modrinth.com/plugin/nameshift",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          label: "Docs",
          href: "/",
        },
        {
          label: "Axios Docs",
          href: "https://docs.axios.software",
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/Lumina-Collection",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Lumina Collection and Contributors. Built with Docusaurus.`,
};

export default footer;
