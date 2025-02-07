import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  exposes: {},
  remotes: {
    remote: "remote@http://localhost:3001/remoteEntry.js",
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
