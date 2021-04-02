import React from "react";
import styled from "styled-components";
import { Name } from "../Name";
import { Section } from "../Section";

const Wrapper = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Basics = ({ name, label, email, phone, summary, location }) => {
  return (
    <Section img={<img src="https://via.placeholder.com/150" />}>
      <header>
        <Name>{name}</Name>
        {label}
      </header>
      <Wrapper>
        <div>
          <div>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
        <div>
          <div>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div>
            {location.city}, {location.countryCode}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};
