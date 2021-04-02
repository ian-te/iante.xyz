import React from "react";
import { Section } from "../Section";

export const Skills = ({ skills }) => {
  return (
    <Section label="Skills">
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </Section>
  );
};
