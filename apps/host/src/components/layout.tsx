import { useShellNavigateListener } from "@mfa/shell-router";
import { useUserStore } from "@mfa/store";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { user, setUser } = useUserStore();
  useShellNavigateListener();
  return (
    <ErrorBoundary fallback="error">
      shell
      <div>
        user: {user.name}
        <button onClick={() => setUser({ name: "shell kang" })}>update</button>
      </div>
      <Outlet />
    </ErrorBoundary>
  );
};

export default Layout;
