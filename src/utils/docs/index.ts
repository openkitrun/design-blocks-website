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
      title: "Native",
      disabled: true,
      items: [
        {
          title: "Configuration",
          href: "/docs/native/configuration",
          isBeta: true,
        },
        {
          title: "Tokens",
          href: "/docs/native/tokens",
          isBeta: true,
        },
        {
          title: "Block",
          href: "/docs/native/block",
          isBeta: true,
        },
        {
          title: "CSS",
          href: "/docs/native/css",
          isWIP: true,
        },
      ],
    },
    {
      title: "Customization",
      disabled: true,
      items: [
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
          title: "Sizes",
          href: "/docs/customization/sizes",
          isBeta: true,
        },
        {
          title: "Borders",
          href: "/docs/customization/borders",
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
          isWIP: true,
        },
        {
          title: "Text",
          href: "/docs/primitives/text",
          isWIP: true,
        },
        {
          title: "Stacks",
          href: "/docs/primitives/Sstacks",
          isWIP: true,
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
        {
          title: "Accordion",
          href: "/docs/unstyled/accordion",
          isPlanned: true,
        },
        {
          title: "Checkbox",
          href: "/docs/unstyled/check-box",
          isPlanned: true,
        },
        {
          title: "Toggle",
          href: "/docs/unstyled/toggle",
          isPlanned: true,
        },
        {
          title: "Switch",
          href: "/docs/unstyled/Switch",
          isPlanned: true,
        },
        {
          title: "Radio",
          href: "/docs/unstyled/radio",
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
          isWIP: true,
        },
        {
          title: "radix-ui",
          href: "/docs/colors/bradix-uiutton",
          isWIP: true,
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
          isWIP: true,
        },
        {
          title: "Multiple themes",
          href: "/docs/guides/multiple-themes",
          isWIP: true,
        },
      ],
    },
  ],
};
