const path = require("path");

const componentTemplate = (
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) => {
  //   console.log("opts: ", opts);
  //   console.log({ imports, interfaces, componentName, props, jsx, exports });
  const [type, size] = opts.state.filePath
    .split("/")
    .slice(-1)[0]
    .replace(".svg", "")
    .toLowerCase()
    .split("-");

  const code = `
      import React from 'react';\
      import PropTypes from "prop-types";
      import classnames from "classnames";
      NEWLINE
      const type = "TYPE";
      const iconSize = ICON_SIZE;
      NEWLINE
      /**
      * Icons
      *
      * @visibleName
      */
      const COMPONENT_NAME = ({ size, title, className, ...props }) => COMPONENT_JSX;
      NEWLINE
      COMPONENT_NAME.propTypes = {
        size: PropTypes.string,
        title: PropTypes.string,
        className: PropTypes.string,
      };
      
      COMPONENT_NAME.defaultProps = {
        size: undefined,
        title: undefined,
        className: undefined,
      };
      
      export default COMPONENT_NAME;
    `;

  const reactTemplate = template.smart(code, {
    plugins: ["react"],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    TYPE: type,
    ICON_SIZE: size === "large" ? "32" : "18",
    NEWLINE: "\n",
  });
};

const indexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}Icon } from './${basename}'`;
  });
  return exportEntries.join("\n");
};

const svgrConfig = {
  svgProps: {
    className: "{classnames('svg-icon', `svg-icon-${type}`, className)}",
    focusable: "false",
    width: "{size || `${iconSize}px`}",
    height: "{size || `${iconSize}px`}",
    viewBox: "{`0 0 ${iconSize} ${iconSize}`}",
    "aria-label": "{title}",
    "aria-hidden": "{!title}",
  },
  template: componentTemplate,
  indexTemplate: indexTemplate,
  ext: "jsx",
  plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
};

module.exports = svgrConfig;
