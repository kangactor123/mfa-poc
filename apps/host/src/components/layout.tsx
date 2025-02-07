import { useShellNavigateListener } from "@mfa/shell-router";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useShellNavigateListener();
  return (
    <ErrorBoundary fallback="error">
      <div>
        shell
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
