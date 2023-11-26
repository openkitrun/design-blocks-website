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
      isPlanned: true,
    },
    {
      title: "Examples",
      href: "/docs/examples",
      isPlanned: true,
    },
  ],

  sidebarNav: [
    {
      title: "Get started",
      href: "/docs",
      items: [
        {
          title: "Why Design Blocks?",
          href: "/docs/why-design-blocks",
        },
        {
          title: "Instalation",
          href: "/docs/installation",
          isBeta: true,
        },
        {
          title: "blocks.config.ts",
          href: "/docs/config-file",
          isBeta: true,
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
          isBeta: true,
        },
        {
          title: "Using Tokens",
          href: "/docs/theming/usage",
          isPlanned: true,
        },
      ],
    },
    {
      title: "Customization",
      disabled: true,
      items: [
        {
          title: "Theme",
          href: "/docs/customization/theme",
          isWIP: true,
        },
        {
          title: "Colors",
          href: "/docs/customization/colors",
          isBeta: true,
        },
        {
          title: "Spacings",
          href: "/docs/customization/spacings",
          isBeta: true,
        },
        {
          title: "Radii",
          href: "/docs/customization/radii",
          isBeta: true,
        },
        {
          title: "Fonts",
          href: "/docs/customization/fonts",
          isBeta: true,
        },
        {
          title: "Utilities",
          href: "/docs/customization/utilities",
          isPlanned: true,
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
          isPlanned: true,
        },
        {
          title: "Text",
          href: "/docs/primitives/text",
          isPlanned: true,
        },
        {
          title: "Stacks",
          href: "/docs/primitives/Sstacks",
          isPlanned: true,
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
          isPlanned: true,
        },
        {
          title: "Button",
          href: "/docs/unstyled/button",
          isPlanned: true,
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
          isPlanned: true,
        },
        {
          title: "radix-ui",
          href: "/docs/colors/bradix-uiutton",
          isPlanned: true,
        },
      ],
    },
    {
      title: "Guides",
      disabled: true,
      items: [
        {
          title: "Blocks",
          href: "/docs/guides/blocks",
          isPlanned: true,
        },
        {
          title: "Multiple themes",
          href: "/docs/guides/multiple-themes",
          isPlanned: true,
        },
      ],
    },
  ],
};
