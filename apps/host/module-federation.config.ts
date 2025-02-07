import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  exposes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "@mfa/shell-router": {
      singleton: true,
    },
  },
};
