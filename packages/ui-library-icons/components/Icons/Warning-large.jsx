import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Warninglarge from "./svg/Warning-large.svg";

/**
 * Icon
 *
 * @visibleName
 */
const Icon = ({ size, title, className, ...props }) => {
  return React.createElement(Warninglarge, {
    "aria-label": title,
    "aria-hidden": !title,
    width: size || `32px`,
    height: size || `32px`,
    viewBox: `0 0 32 32`,
    className: classnames(`svg-icon svg-icon-warning`, className),
    ...props,
  });
};

Icon.propTypes = {
  /**
   * Will override the default sizes (small: 18px and large: 32px). Must include unit ie \`24px\`.
   *
   * Can be different unit types other than 'px' eg: \`em\`, \`rem\`, \`%\`, \`pt\`, \`vh\` etc.
   */
  size: PropTypes.string,
  /**
   * If title is added aria-hidden="true" is replaced with aria-label="title", to better discribe the element for screen readers.
   */
  title: PropTypes.string,
  /**
   * Specify your own classname into this prop, if you need to customise layout of this component.
   * This classname will be put into the parent container of this component.
   * @since Version 6.0.0
   */
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: undefined,
  title: undefined,
  className: undefined,
};

export default Icon;
