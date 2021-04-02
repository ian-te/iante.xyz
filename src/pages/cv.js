import React from "react";
import { graphql } from "gatsby";
import { Wrapper } from "../components/cv/Wrapper";
import { Basics } from "../components/cv/Basics";
import { Skills } from "../components/cv/Skills";
import { Experience } from "../components/cv/Experience";

const CVpage = ({ data }) => {
  const {
    dataYaml: { basics, employers },
  } = data;
  console.log(data);
  return (
    <Wrapper>
      <Basics {...basics} />
      <Skills skills={basics.skills} />
      <Experience employers={employers}></Experience>
    </Wrapper>
  );
};

export default CVpage;

export const pageQuery = graphql`
  query MyQuery {
    dataYaml {
      id
      basics {
        name
        label
        image
        email
        phone
        url
        summary
        location {
          city
          countryCode
        }
        skills
      }
      employers {
        dateStart
        dateEnd
        achievements
        name
        logo
        achievements
      }
    }
  }
`;
