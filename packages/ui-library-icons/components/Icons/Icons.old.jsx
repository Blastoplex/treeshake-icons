import React from "react";
import SvgIcon from "./SvgIcon";
import { AddIcon, AddLargeIcon, WarningIcon, WarningLargeIcon } from ".";

const iconMap = {
  Add: { lg: AddLargeIcon, sm: AddIcon },
  Warning: { lg: WarningLargeIcon, sm: WarningIcon },
};

const SvgIcon = ({ type, set, ...props }) =>
  React.createElement(iconMap[type][set], props);

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
