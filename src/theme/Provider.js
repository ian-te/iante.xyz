import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

function Provider({ children }) {
  // Return the layout based on the current theme
  const theme = "light";
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>{children}</>
    </ThemeProvider>
  );
}

export default Provider;
