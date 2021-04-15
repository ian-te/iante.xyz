import React from "react";
import Provider from "./theme/Provider";

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
