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
      title: "Get started",
      items: [
        {
          title: "Why Design Blocks?",
          href: "/docs/why-design-blocks",
        },
        {
          title: "Instalation",
          href: "/docs/installation",
        },
        {
          title: "blocks.config.ts",
          href: "/docs/config-file",
        },
      ],
    },
    {
      title: "Theming",
      disabled: true,
      items: [
        {
          title: "Tokens",
          href: "/docs/theming/tokens",
        },
        {
          title: "Using Tokens",
          href: "/docs/theming/usage",
        },
      ],
    },
    {
      title: "Customization",
      disabled: true,
      items: [
        {
          title: "Theme",
          href: "/docs/customization/usage",
        },
        {
          title: "Utilities",
          href: "/docs/customization/utilities",
        },
      ],
    },
    {
      title: "Primitives",
      disabled: true,
      items: [
        {
          title: "Box",
          href: "/docs/primitives/box",
        },
        {
          title: "Text",
          href: "/docs/primitives/text",
        },
        {
          title: "Stacks",
          href: "/docs/primitives/Sstacks",
        },
      ],
    },
    {
      title: "Unstyled",
      disabled: true,
      items: [
        {
          title: "Avatar",
          href: "/docs/unstyled/avatar",
        },
        {
          title: "Button",
          href: "/docs/unstyled/button",
        },
      ],
    },
    {
      title: "Colors",
      disabled: true,
      items: [
        {
          title: "tailwind-css",
          href: "/docs/colors/tailwind-css",
        },
        {
          title: "radix-ui",
          href: "/docs/colors/bradix-uiutton",
        },
      ],
    },
  ],
};
