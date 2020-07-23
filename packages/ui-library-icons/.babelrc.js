const presetEnv = require("@babel/preset-env");
const presetReact = require("@babel/preset-react");
const classProperties = require("@babel/plugin-proposal-class-properties");
const runtime = require("@babel/plugin-transform-runtime");

module.exports = (api) => {
  const env = api.env();
  let modules;

  switch (env) {
    case "test":
      modules = "auto";
      break;
    case "production":
    default:
      modules = false;
      break;
  }

  return {
    presets: [
      [
        presetEnv,
        {
          modules,
          shippedProposals: true,
        },
      ],
      [presetReact],
    ],
    plugins: [[classProperties], [runtime]],
  };
};
