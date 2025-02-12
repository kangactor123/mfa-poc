import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  exposes: {
    "./store": "./src/store",
  },
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
    zustand: {
      singleton: true,
    },
    "@mfa/shell-router": {
      singleton: true,
    },
  },
};
