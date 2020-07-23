import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const type = "add";
const iconSize = 32;

const SvgAddLarge = ({ size, title, className, ...props }) => (
  <svg
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox={`0 0 ${iconSize} ${iconSize}`}
    style={{
      enableBackground: "new 0 0 32 32",
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
    <path d="M17,15 L26.9993054,15 C27.5519738,15 28,15.4438648 28,16 C28,16.5522847 27.5525308,17 26.9993054,17 L17,17 L17,26.9993054 C17,27.5519738 16.5561352,28 16,28 C15.4477153,28 15,27.5525308 15,26.9993054 L15,17 L5.00069463,17 C4.44802625,17 4,16.5561352 4,16 C4,15.4477153 4.44746922,15 5.00069463,15 L15,15 L15,5.00069463 C15,4.44802625 15.4438648,4 16,4 C16.5522847,4 17,4.44746922 17,5.00069463 L17,15 Z" />
  </svg>
);

SvgAddLarge.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
SvgAddLarge.defaultProps = {
  size: undefined,
  title: undefined,
  className: undefined,
};
export default SvgAddLarge;
