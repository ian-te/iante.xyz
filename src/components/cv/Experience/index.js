import React from "react";
import { Section } from "../Section";

export const Experience = ({ employers }) => {
  return (
    <Section label={"experience"}>
      {employers && employers.map((employer) => <Employer {...employer} />)}
    </Section>
  );
};

const Employer = ({ employer }) => {
  return <div>{employer.name}</div>;
};
