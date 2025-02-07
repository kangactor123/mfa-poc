import { injectFactory } from "@mfa/shell-router";
import { routes } from "./routes";

const inject = injectFactory({
  routes,
});

export default inject;
