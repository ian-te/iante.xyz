import React from "react";
import { Section } from "../Section";
import { DateTime } from "luxon";
import styled from "styled-components";

const convertDate = (date) => DateTime.fromISO(date).toFormat("MMM yyyy");

export const Experience = ({ employers }) => {
  console.log(">>>", employers, DateTime);
  return (
    <Section label={"experience"}>
      <dl>
        {employers && employers.map((employer) => <Employer {...employer} />)}
      </dl>
    </Section>
  );
};

const Wrapper = styled.details`
  summary {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  time {
    font-size: 80%;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
`;

const Employer = ({
  name,
  dateStart,
  dateEnd,
  position,
  logo,
  description,
  achievements,
}) => {
  const date = convertDate(dateStart);
  return (
    <Wrapper open>
      <summary>
        <strong>
          {position}, {name}
        </strong>
        <time>
          {convertDate(dateStart)} {dateEnd && ` – ${convertDate(dateEnd)}`}
        </time>
      </summary>
      <div>
        <p>{description}</p>
        <ul>
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};
