const path = require("path");

const createConfig = require("@titicaca/eslint-config-triple/create-config");

const { extends: extendConfig, overrides } = createConfig({
  type: "frontend",
  project: path.resolve(__dirname, "./tsconfig.json"),
});

module.exports = {
  extends: [...extendConfig, "next/core-wev-vitals"],
  overrides,
};
