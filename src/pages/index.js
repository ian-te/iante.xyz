import * as React from "react";
import { Version } from "../components/Version";
import styled from "styled-components";

// styles

const Main = styled.main`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  font-size: 4vw;
  min-height: 100vh;
`;

// markup
const IndexPage = () => {
  return (
    <Main>
      <div>
        <h2>iante.xyz</h2>
        <Version />
      </div>
    </Main>
  );
};

export default IndexPage;
