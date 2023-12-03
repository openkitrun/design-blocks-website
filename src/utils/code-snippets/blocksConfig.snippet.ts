import { outdent } from "outdent";

export const blocksConfigSnippet = outdent`
  import {createBlocks, createTokens} from '@design-blocks/native';
  import colors from '@design-blocks/colors/tailwind-css';

  export const lightTheme = {
    tokens: {
      colors: {
        text: {
          primary: colors.neutral[950],
          secondary: colors.neutral[600],
          link: colors.red[500],
          error: colors.red[600],
          success: colors.green[600],
          info: colors.blue[600],
          warning: colors.yellow[600],
        },
        bgColorDisabledPrimary: colors.neutral[300],
        colorDisabledPrimary: colors.neutral[500],
        backgroundColorDefault: '#ffffff',
        ...colors,
      },
    },
  } as const;

  export const darkTheme = {
    tokens: {
      colors: {
        text: {
          primary: colors.neutral[950],
          secondary: colors.neutral[600],
          link: colors.red[500],
          error: colors.red[600],
          success: colors.green[600],
          info: colors.blue[600],
          warning: colors.yellow[600],
        },
        bgColorDisabledPrimary: colors.neutral[300],
        colorDisabledPrimary: colors.neutral[500],
        backgroundColorDefault: colors.blue[600],
        ...colors,
      },
    },
  } as const;

  const [lightThemeTokens] = createTokens({theme: lightTheme});
  const [darkThemeTokens] = createTokens({theme: darkTheme});

  export const {themes, block, css} = createBlocks({
    themes: {light: lightThemeTokens, dark: darkThemeTokens},
  });
`;
