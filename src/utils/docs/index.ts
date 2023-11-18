import { DocsConfig } from "./types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
      isBeta: true,
    },
    {
      title: "Guides",
      href: "/docs/guides",
    },
    {
      title: "Examples",
      href: "/docs/examples",
      isProgress: true,
    },
  ],

  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/getting-started/installation",
        },
      ],
    },
    {
      title: "DX",
      items: [
        {
          title: "Introducción",
          href: "/docs/develop",
        },
        {
          title: "Nuestra Misión",
          href: "/docs/develop/nuestra-mision",
          disabled: false,
        },
      ],
    },
  ],
};
