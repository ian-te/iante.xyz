import React from "react";
import styled from "styled-components";
import { Section } from "../Section";

export const Skills = ({ skills }) => {
  return (
    <Section label="Skills">
      <SkillsWrapper>
        {skills.map((skill) => (
          <Skill>
            {skill.map((skill) => (
              <SkillInner>{skill}</SkillInner>
            ))}
          </Skill>
        ))}
      </SkillsWrapper>
    </Section>
  );
};

const SkillsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
`;

const Skill = styled.li`
  margin: 0 10px 10px 0;
  border: 1px solid #000;
  border-radius: 20px;
`;

const SkillInner = styled.span`
  display: inline-block;
  padding: 5px 10px;
  :not(:last-child) {
    border-right: 1px solid #000;
  }
`;
