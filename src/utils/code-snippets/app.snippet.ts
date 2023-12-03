import { outdent } from "outdent";

export const appSnippet = outdent`
import * as React from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@design-blocks/native";

import { themes } from "./blocks.config.ts";
import Screen from "./screen";

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider
        theme={
          colorScheme === "light" ? themes.light : themes.dark
        }
      >
        <Screen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
`;
