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

const addIcon = (
  <path
    fillRule="evenodd"
    d="M9 1a8 8 0 110 16A8 8 0 119 1zm0 2C5.691 3 3 5.691 3 9s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2a1 1 0 01.993.883L10 6v2h2a1 1 0 01.117 1.993L12 10h-2v2a1 1 0 01-1.993.117L8 12v-2H6a1 1 0 01-.117-1.993L6 8h2V6a1 1 0 011-1z"
  />
);
const largeAddIcon = (
  <path d="M17,15 L26.9993054,15 C27.5519738,15 28,15.4438648 28,16 C28,16.5522847 27.5525308,17 26.9993054,17 L17,17 L17,26.9993054 C17,27.5519738 16.5561352,28 16,28 C15.4477153,28 15,27.5525308 15,26.9993054 L15,17 L5.00069463,17 C4.44802625,17 4,16.5561352 4,16 C4,15.4477153 4.44746922,15 5.00069463,15 L15,15 L15,5.00069463 C15,4.44802625 15.4438648,4 16,4 C16.5522847,4 17,4.44746922 17,5.00069463 L17,15 Z" />
);

/**
 * Icons
 *
 * @visibleName
 */
const AddIcon = ({ size, title, set, className }) => {
  const ariaAttribute = title
    ? { "aria-label": title }
    : { "aria-hidden": "true" };

  const iconSet = sets[set];
  const iconSize = sizes[set];

  return (
    <svg
      className={classnames(`svg-icon svg-icon-add`, className)}
      {...ariaAttribute}
      xmlns="http://www.w3.org/2000/svg"
      width={size || `${iconSize}px`}
      height={size || `${iconSize}px`}
      viewBox={`0 0 ${iconSize} ${iconSize}`}
    >
      {size == "large" ? largeAddIcon : addIcon}
    </svg>
  );
};

AddIcon.propTypes = {
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

AddIcon.defaultProps = {
  size: undefined,
  title: undefined,
  set: "sm",
  className: undefined,
};

export default AddIcon;
