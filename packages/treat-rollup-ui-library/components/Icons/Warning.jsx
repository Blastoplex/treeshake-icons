import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const type = "warning";
const iconSize = 18;

const SvgWarning = ({ size, title, className, ...props }) => (
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
    <g fillRule="evenodd">
      <path d="M7.435 1.99L1.212 14.225a1.979 1.979 0 0 0 .04 1.858c.32.569.9.917 1.526.917h12.444a1.76 1.76 0 0 0 1.526-.917c.321-.57.336-1.274.04-1.858L10.565 1.99C10.255 1.38 9.655 1 9 1c-.654 0-1.255.38-1.565.99zm7.33 12.11c.252.497.014.9-.54.9H3.775c-.55 0-.79-.407-.54-.9L9 2.765 14.765 14.1z" />
      <path d="M8 10c0 .552.444 1 1 1 .552 0 1-.444 1-1V7c0-.552-.444-1-1-1-.552 0-1 .444-1 1v3zm1 4c.552 0 1-.444 1-1 0-.552-.444-1-1-1-.552 0-1 .444-1 1 0 .552.444 1 1 1z" />
    </g>
  </svg>
);

SvgWarning.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
SvgWarning.defaultProps = {
  size: undefined,
  title: undefined,
  className: undefined,
};
export default SvgWarning;
