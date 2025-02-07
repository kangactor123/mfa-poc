import { dependencies } from "./package.json";

export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./button": "./src/Button.tsx",
    "./inject": "./src/injector.tsx",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
