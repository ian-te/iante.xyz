import React from "react";
import SEO from "./components/SEO";

export const wrapPageElement = ({ element }) => (
  <>
    <SEO />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
      rel="stylesheet"
    />
    {element}
  </>
);
