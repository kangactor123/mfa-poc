export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
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
