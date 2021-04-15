import React from "react";
import { version } from "/package.json";
import "./version.css";
import styled from "styled-components";

const StyledVersion = styled.div`
  font-size: 80%;
  color: ${(props) => {
    console.log(props.theme);
    return props.theme.text;
  }};
`;

export const Version = () => {
  return <StyledVersion>version: {version}</StyledVersion>;
};
