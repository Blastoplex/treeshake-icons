import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const type = "add";
const iconSize = 18;

const SvgAdd = ({ size, title, className, ...props }) => (
  <svg
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox={`0 0 ${iconSize} ${iconSize}`}
    style={{
      enableBackground: "new 0 0 18 18",
    }}
    xmlSpace="preserve"
    className={classnames("svg-icon", `svg-icon-${type}`, className)}
    focusable="false"
    width={size || `${iconSize}px`}
    height={size || `${iconSize}px`}
    aria-label={title}
    aria-hidden={!title}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9 1a8 8 0 110 16A8 8 0 119 1zm0 2C5.691 3 3 5.691 3 9s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2a1 1 0 01.993.883L10 6v2h2a1 1 0 01.117 1.993L12 10h-2v2a1 1 0 01-1.993.117L8 12v-2H6a1 1 0 01-.117-1.993L6 8h2V6a1 1 0 011-1z"
    />
  </svg>
);

SvgAdd.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
SvgAdd.defaultProps = {
  size: undefined,
  title: undefined,
  className: undefined,
};
export default SvgAdd;
