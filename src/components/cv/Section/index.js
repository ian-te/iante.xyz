import React from "react";
import styled from "styled-components";

export const Section = ({ img, label, children }) => {
  return (
    <Wrapper>
      <Image>{img && img}</Image>
      <Content>
        {label && <Label>{label}</Label>}
        {children}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 20px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Image = styled.div`
  img {
    max-width: 100%;
  }
`;

const Content = styled.div``;

const Label = styled.h2`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 80%;
  color: ${(props) => props.theme.textLight};
`;
