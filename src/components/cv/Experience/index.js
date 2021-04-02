import React from "react";
import { Section } from "../Section";
import { DateTime } from "luxon";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

const Image = styled.div`
  top: -15px;
  right: 100%;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #eee;
  border-radius: 200px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-right: 20px;
  position: absolute;
  right: 100%;
  margin-right: 20px;
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
      <Image>
        <GatsbyImage image={getImage(logo)} alt={`${name} logo`} />
      </Image>
      <summary>
        <strong>{[position, name].filter((i) => !!i).join(", ")}</strong>
        <time>
          {dateStart && convertDate(dateStart)}{" "}
          {dateEnd && ` – ${convertDate(dateEnd)}`}
        </time>
      </summary>
      <div>
        <p>{description}</p>
        {achievements && (
          <ul>
            {achievements.map((achievement) => (
              <li>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
};
