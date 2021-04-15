import { lighten, tint, transparentize } from "polished";
import React from "react";
import styled from "styled-components";

const ToggleTheme = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
`;

const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 2px 12px;
  border-bottom: 1px solid ${({ theme }) => transparentize(0.5, theme.text)};
  @media print {
    display: none;
  }
`;

export const Header = ({ children, toggleTheme, theme }) => {
  return (
    <HeaderStyled>
      <ToggleTheme onClick={toggleTheme}>{theme}</ToggleTheme>
      {children}
    </HeaderStyled>
  );
};
