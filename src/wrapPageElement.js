import React from "react";
import { createGlobalStyle } from "styled-components";
import SEO from "./components/SEO";

const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
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
export const wrapPageElement = ({ element }) => (
  <>
    <SEO />
    <GlobalStyles />
    {element}
  </>
);
