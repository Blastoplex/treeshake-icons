import React from "react";
import { link } from "./Link.treat";

export default ({ children, href }) => (
  <a className={link} href={href}>
    {children}
  </a>
);
