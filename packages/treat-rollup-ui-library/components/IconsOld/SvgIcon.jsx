import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Svgs from "./Svgs";
import LargeSvgSet from "./LargeSvgSet";

const sets = {
  sm: Svgs,
  lg: LargeSvgSet,
};

const sizes = {
  sm: "18",
  lg: "32",
};

/**
 * Icons
 *
 * @visibleName
 */
const SvgIcon = ({ size, type, title, set, className }) => {
  const ariaAttribute = title
    ? { "aria-label": title }
    : { "aria-hidden": "true" };

  const iconSet = sets[set];
  const iconSize = sizes[set];

  return (
    <svg
      className={classnames(`svg-icon svg-icon-${type}`, className)}
      {...ariaAttribute}
      xmlns="http://www.w3.org/2000/svg"
      width={size || `${iconSize}px`}
      height={size || `${iconSize}px`}
      viewBox={`0 0 ${iconSize} ${iconSize}`}
    >
      {iconSet[type]}
    </svg>
  );
};

SvgIcon.propTypes = {
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

SvgIcon.defaultProps = {
  size: undefined,
  title: undefined,
  set: "sm",
  className: undefined,
};

export default SvgIcon;
