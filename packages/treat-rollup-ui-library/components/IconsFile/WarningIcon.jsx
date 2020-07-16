import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const sets = {
  sm: Svgs,
  lg: LargeSvgSet,
};

const sizes = {
  sm: "18",
  lg: "32",
};

const warningIcon = (
  <g fillRule="evenodd">
    <path d="M7.435 1.99L1.212 14.225a1.979 1.979 0 0 0 .04 1.858c.32.569.9.917 1.526.917h12.444a1.76 1.76 0 0 0 1.526-.917c.321-.57.336-1.274.04-1.858L10.565 1.99C10.255 1.38 9.655 1 9 1c-.654 0-1.255.38-1.565.99zm7.33 12.11c.252.497.014.9-.54.9H3.775c-.55 0-.79-.407-.54-.9L9 2.765 14.765 14.1z" />
    <path d="M8 10c0 .552.444 1 1 1 .552 0 1-.444 1-1V7c0-.552-.444-1-1-1-.552 0-1 .444-1 1v3zm1 4c.552 0 1-.444 1-1 0-.552-.444-1-1-1-.552 0-1 .444-1 1 0 .552.444 1 1 1z" />
  </g>
);

const largeWarningIcon = (
  <path d="M4.15758279,26.011157 C3.93755561,26.4436242 3.94886119,26.9779944 4.18572018,27.3983054 C4.40218101,27.7817835 4.76544445,28 5.13964357,28 L26.8604547,28 C27.2346538,28 27.5979172,27.7817835 27.8136953,27.399516 C28.0512371,26.9779944 28.0625426,26.4436242 27.8423497,26.0108311 L16.9820234,4.65483727 C16.7707943,4.23956296 16.3921057,4 16.0000491,4 C15.6080118,4 15.2293412,4.23953943 15.0181059,4.65477609 L4.15758279,26.011157 Z M13.2607053,3.73270588 C13.8035865,2.66541176 14.8551272,2 16,2 C17.1448728,2 18.1964135,2.66541176 18.7392947,3.73270588 L29.6280301,25.1444706 C30.1475784,26.1656471 30.1211343,27.3992941 29.5595866,28.3957647 C28.998039,29.3905882 27.9838311,30 26.8887354,30 L5.11126459,30 C4.01616892,30 3.00196099,29.3905882 2.44041335,28.3957647 C1.87886571,27.3992941 1.85242164,26.1656471 2.37196987,25.1444706 L13.2607053,3.73270588 Z M16,9 C15.4477153,9 15,9.44771525 15,10 L15,21 C15,21.5522847 15.4477153,22 16,22 C16.5522847,22 17,21.5522847 17,21 L17,10 C17,9.44771525 16.5522847,9 16,9 Z M16,24 C15.4477153,24 15,24.4477153 15,25 C15,25.5522847 15.4477153,26 16,26 C16.5522847,26 17,25.5522847 17,25 C17,24.4477153 16.5522847,24 16,24 Z" />
);

/**
 * Icons
 *
 * @visibleName
 */
const WarningIcon = ({ size, title, set, className }) => {
  const ariaAttribute = title
    ? { "aria-label": title }
    : { "aria-hidden": "true" };

  const iconSet = sets[set];
  const iconSize = sizes[set];

  return (
    <svg
      className={classnames(`svg-icon svg-icon-warning`, className)}
      {...ariaAttribute}
      xmlns="http://www.w3.org/2000/svg"
      width={size || `${iconSize}px`}
      height={size || `${iconSize}px`}
      viewBox={`0 0 ${iconSize} ${iconSize}`}
    >
      {size == "large" ? largeWarningIcon : warningIcon}
    </svg>
  );
};

WarningIcon.propTypes = {
  /**
   * Will override the default sizes (small: 18px and large: 32px). Must include unit ie `24px`.
   *
   * Can be different unit types other than 'px' eg: `em`, `rem`, `%`, `pt`, `vh` etc.
   */
  size: PropTypes.string,
  /**
   * @ignore
   */
  type: PropTypes.oneOf(Object.keys(Svgs)).isRequired,
  /**
   * If title is added aria-hidden="true" is replaced with aria-label="title", to better discribe the element for screen readers.
   */
  title: PropTypes.string,
  /**
   * Icon set to use: sm or lg
   *
   * - `sm`: default icon set with default size: `18px`. Small icon set designed for use cases eg: in buttons.
   *
   * - `lg`: large icon set that is made to scale larger, svgs are slightly different to `sm`. Large icon set default size: `32px`
   */
  set: PropTypes.oneOf(["sm", "lg"]),
  /**
   * Specify your own classname into this prop, if you need to customise layout of this component.
   * This classname will be put into the parent container of this component.
   * @since Version 6.0.0
   */
  className: PropTypes.string,
};

WarningIcon.defaultProps = {
  size: undefined,
  title: undefined,
  set: "sm",
  className: undefined,
};

export default WarningIcon;
