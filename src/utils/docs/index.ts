import { DocsConfig } from "./types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
      status: "beta",
    },
    {
      title: "Guides",
      href: "/docs/guides",
      status: "planned",
    },
    {
      title: "Examples",
      href: "/docs/examples",
      status: "planned",
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
          status: "beta",
        },
        {
          title: "blocks.config.ts",
          href: "/docs/config-file",
          status: "beta",
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
          status: "beta",
        },
        {
          title: "Tokens",
          href: "/docs/native/tokens",
          status: "beta",
        },
        {
          title: "Block",
          href: "/docs/native/block",
          status: "beta",
        },
        {
          title: "CSS",
          href: "/docs/native/css",
          status: "beta",
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
          status: "beta",
        },
        {
          title: "Spacings",
          href: "/docs/customization/spacings",
          status: "beta",
        },
        {
          title: "Radii",
          href: "/docs/customization/radii",
          status: "beta",
        },
        {
          title: "Fonts",
          href: "/docs/customization/fonts",
          status: "beta",
        },
        {
          title: "Sizes",
          href: "/docs/customization/sizes",
          status: "beta",
        },
        {
          title: "Borders",
          href: "/docs/customization/borders",
          status: "beta",
        },
        {
          title: "Utilities",
          href: "/docs/customization/utilities",
          status: "beta",
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
          status: "beta",
        },
        {
          title: "Text",
          href: "/docs/primitives/text",
          status: "wip",
        },
        {
          title: "Stacks",
          href: "/docs/primitives/Sstacks",
          status: "wip",
        },
        {
          title: "Style Props",
          href: "/docs/primitives/style-props",
          status: "wip",
        },
        {
          title: "The sx prop",
          href: "/docs/primitives/the-sx-prop",
          status: "wip",
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
          status: "planned",
        },
        {
          title: "Button",
          href: "/docs/unstyled/button",
          status: "wip",
        },
        {
          title: "Accordion",
          href: "/docs/unstyled/accordion",
          status: "planned",
        },
        {
          title: "Checkbox",
          href: "/docs/unstyled/check-box",
          status: "planned",
        },
        {
          title: "Toggle",
          href: "/docs/unstyled/toggle",
          status: "planned",
        },
        {
          title: "Switch",
          href: "/docs/unstyled/Switch",
          status: "planned",
        },
        {
          title: "Radio",
          href: "/docs/unstyled/radio",
          status: "planned",
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
          status: "wip",
        },
        {
          title: "radix-ui",
          href: "/docs/colors/bradix-uiutton",
          status: "wip",
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
          status: "wip",
        },
        {
          title: "Multiple themes",
          href: "/docs/guides/multiple-themes",
          status: "wip",
        },
      ],
    },
  ],
};
