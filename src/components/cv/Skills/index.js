import React from "react";
import styled from "styled-components";
import { Section } from "../Section";

export const Skills = ({ skills }) => {
  return (
    <Section label="Skills">
      <SkillsWrapper>
        {skills.map((skill) => (
          <Skill>{skill}</Skill>
        ))}
      </SkillsWrapper>
    </Section>
  );
};

const SkillsWrapper = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
`;

const Skill = styled.li``;
