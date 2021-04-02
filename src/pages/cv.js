import React from "react";
import { graphql } from "gatsby";
import { Wrapper } from "../components/cv/Wrapper";
import { Basics } from "../components/cv/Basics";
import { Skills } from "../components/cv/Skills";
import { Experience } from "../components/cv/Experience";
import "./index.css";

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
        position
        achievements
        name
        achievements
        description
        logo {
          childImageSharp {
            gatsbyImageData(
              width: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
