export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./injector": "./src/injector.tsx",
  },
  shared: {
    "react-router-dom": {
      singleton: true,
    },
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    "@mfa/shell-router": {
      singleton: true,
    },
    "@mfa/store": {
      singleton: true,
    },
  },
};
