import { AppRoutingManager } from "@mfa/shell-router";
import React, { Suspense } from "react";
import { Navigate, type RouteObject } from "react-router-dom";
import Layout from "./components/Layout";

const Home = React.lazy(() => import("./pages/home"));
const List = React.lazy(() => import("./pages/list"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={"loading.."}>
        <Layout>
          <AppRoutingManager type="remote" />
        </Layout>
      </Suspense>
    ),
    errorElement: <div>error in remote</div>,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "list", element: <List /> },
    ],
  },
];
