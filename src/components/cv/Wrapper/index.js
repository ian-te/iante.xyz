import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 800px;
  a {
    color: blue;
  }
  a[href^="tel"] {
    color: #000;
    text-decoration: none;
  }
`;
