import React from "react";
import SvgIcon from "./SvgIcon";

const icon = (type, displayName) => {
  const Icon = (props) => <SvgIcon type={type} {...props} />;

  Icon.displayName = `Icons.${displayName}`;
  return Icon;
};

const Icons = (props) => <SvgIcon {...props} />;

Object.assign(Icons, {
  Add: icon("add", "Add"),
  Warning: icon("warning", "Warning"),
});

export default Icons;
