import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import {
  appRemote2Basename,
  appRemoteBasename,
} from "./shared/constants/prefix";
import AppRemote from "./components/app-remote";
import AppRemote2 from "./components/app-remote-2";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={appRemoteBasename} />,
      },
      {
        path: `${appRemoteBasename}/*`,
        element: <AppRemote />,
      },
      {
        path: `${appRemote2Basename}/*`,
        element: <AppRemote2 />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
