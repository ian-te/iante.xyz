import React from "react";
import { Section } from "../Section";
import { DateTime } from "luxon";
import styled from "styled-components";

const convertDate = (date) => DateTime.fromISO(date).toFormat("MMM yyyy");

export const Experience = ({ employers, label }) => {
  return (
    <Section label={label || "experience"}>
      <dl>
        {employers && employers.map((employer) => <Employer {...employer} />)}
      </dl>
    </Section>
  );
};

const Wrapper = styled.details`
  position: relative;
  page-break-inside: avoid;
  padding: 20px 0;
  time {
    font-size: 80%;
  }
  summary {
    display: flex;
    &:before {
      content: ">";
      display: none !important;
    }
    justify-content: space-between;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

const Employer = ({
  name,
  dateStart,
  dateEnd,
  position,
  logo,
  website,
  description,
  achievements,
}) => {
  return (
    <Wrapper open>
      {/* <Image>
        <GatsbyImage image={getImage(logo)} alt={`${name} logo`} />
      </Image> */}
      <summary>
        <strong>{[position, name].filter((i) => !!i).join(", ")}</strong>
        <time>
          {dateStart && convertDate(dateStart)}{" "}
          {dateEnd && ` – ${convertDate(dateEnd)}`}
        </time>
      </summary>
      {website && (
        <a target="_blank" rel="noopener noreferrer" href={website}>
          {website}
        </a>
      )}
      <div>
        <p>{description}</p>
        {achievements && [
          <p>Achievements:</p>,
          <ul>
            {achievements.map((achievement) => (
              <li>{achievement}</li>
            ))}
          </ul>,
        ]}
      </div>
    </Wrapper>
  );
};
