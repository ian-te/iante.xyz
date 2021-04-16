import React from "react";
import SEO from "./components/SEO";

export const wrapPageElement = ({ element }) => (
  <>
    <SEO />
    {element}
  </>
);
