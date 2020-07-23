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
      import React from 'react';
      import PropTypes from "prop-types";
      import classnames from "classnames";
      NEWLINE
      const type = TYPE;
      const iconSize = ICONSIZE;
      NEWLINE
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
    ICONSIZE: size === "large" ? "32" : "18",
    NEWLINE: "\n",
  });
};

const svgrConfig = {
  svgProps: {
    focusable: "false",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
  },
  plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
  ref: true,
};

module.exports = svgrConfig;
