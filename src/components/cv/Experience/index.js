import React from "react";
import { Section } from "../Section";
import { DateTime } from "luxon";
import styled from "styled-components";

const convertDate = (date) => DateTime.fromISO(date).toFormat("MMM yyyy");

export const Experience = ({ employers }) => {
  console.log(">>>", employers, DateTime);
  return (
    <Section label={"experience"}>
      {employers && employers.map((employer) => <Employer {...employer} />)}
    </Section>
  );
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const Employer = ({ name, dateStart, dateEnd, logo, achievements }) => {
  const date = convertDate(dateStart);
  return (
    <Wrapper>
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        {convertDate(dateStart)} {dateEnd && ` – ${convertDate(dateEnd)}`}
      </div>
      <div>
        <ul>
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};
