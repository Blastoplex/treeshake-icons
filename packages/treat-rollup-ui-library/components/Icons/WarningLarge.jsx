import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const type = "warning";
const iconSize = 32;

const SvgWarningLarge = ({ size, title, className, ...props }) => (
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
    <path d="M4.15758279,26.011157 C3.93755561,26.4436242 3.94886119,26.9779944 4.18572018,27.3983054 C4.40218101,27.7817835 4.76544445,28 5.13964357,28 L26.8604547,28 C27.2346538,28 27.5979172,27.7817835 27.8136953,27.399516 C28.0512371,26.9779944 28.0625426,26.4436242 27.8423497,26.0108311 L16.9820234,4.65483727 C16.7707943,4.23956296 16.3921057,4 16.0000491,4 C15.6080118,4 15.2293412,4.23953943 15.0181059,4.65477609 L4.15758279,26.011157 Z M13.2607053,3.73270588 C13.8035865,2.66541176 14.8551272,2 16,2 C17.1448728,2 18.1964135,2.66541176 18.7392947,3.73270588 L29.6280301,25.1444706 C30.1475784,26.1656471 30.1211343,27.3992941 29.5595866,28.3957647 C28.998039,29.3905882 27.9838311,30 26.8887354,30 L5.11126459,30 C4.01616892,30 3.00196099,29.3905882 2.44041335,28.3957647 C1.87886571,27.3992941 1.85242164,26.1656471 2.37196987,25.1444706 L13.2607053,3.73270588 Z M16,9 C15.4477153,9 15,9.44771525 15,10 L15,21 C15,21.5522847 15.4477153,22 16,22 C16.5522847,22 17,21.5522847 17,21 L17,10 C17,9.44771525 16.5522847,9 16,9 Z M16,24 C15.4477153,24 15,24.4477153 15,25 C15,25.5522847 15.4477153,26 16,26 C16.5522847,26 17,25.5522847 17,25 C17,24.4477153 16.5522847,24 16,24 Z" />
  </svg>
);

SvgWarningLarge.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
SvgWarningLarge.defaultProps = {
  size: undefined,
  title: undefined,
  className: undefined,
};
export default SvgWarningLarge;
