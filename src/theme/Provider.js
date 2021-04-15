import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&display=swap");

body {
  padding: 0;
  margin: 0;
  font-family: Inter, sans-serif;
  line-height: 1.5;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
}

.main {
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  box-sizing: border-box;
  text-align: center;
  font-size: 4vw;
}
a {
  color: ${(props) => props.theme.text};
  text-decoration: none;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -0.1em;
    left: 0;
    right: 0;
    border-bottom: 1px solid ${(props) => props.theme.textLight};
  }
}
`;

function Provider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button style={{ position: "absolute" }} onClick={toggleTheme}>
          Toggle theme
        </button>
        {children}
      </>
    </ThemeProvider>
  );
}

export default Provider;
