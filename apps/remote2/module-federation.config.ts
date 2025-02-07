import { dependencies } from "./package.json";

export const mfConfig = {
  name: "remote2",
  filename: "remoteEntry.js",
  exposes: {
    "./injector": "./src/injector.tsx",
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
    "@mfa/shell-router": {
      singleton: true,
    },
  },
};
