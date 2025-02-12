import { useShellNavigateListener } from "@mfa/shell-router";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import useStore from "../store";

const Layout = () => {
  const { count, increment } = useStore();
  useShellNavigateListener();
  return (
    <ErrorBoundary fallback="error">
      shell
      <div>
        count:{count}
        <button onClick={increment}>+</button>
      </div>
      <Outlet />
    </ErrorBoundary>
  );
};

export default Layout;
