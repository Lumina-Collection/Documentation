import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const rollbound: SidebarsConfig = {
  primary: [
    "README",
    {
      type: "category",
      label: "Administration",
      collapsed: true,
      link: {
        type: "doc",
        id: "admin/README",
      },
      items: [
        "admin/getting-started",
        {
          type: "category",
          label: "Configuration",
          link: {
            type: "doc",
            id: "admin/configuration/README",
          },
          items: [
            "admin/configuration/config",
            "admin/configuration/commands-and-permissions",
            "admin/configuration/localization",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Usage",
      collapsed: true,
      link: {
        type: "doc",
        id: "usage/README",
      },
      items: [
        "usage/rolling-dice",
      ],
    },
  ],
};

export = rollbound;
