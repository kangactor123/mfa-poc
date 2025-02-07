import React, { Suspense } from "react";

import { AppRoutingManager } from "@mfa/shell-router";
import { Navigate, type RouteObject } from "react-router-dom";

import Layout from "./components/Layout";

const Home = React.lazy(() => import("./pages/home"));
const List = React.lazy(() => import("./pages/list"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense>
        <Layout>
          <AppRoutingManager type="remote2" />
        </Layout>
      </Suspense>
    ),
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "list", element: <List /> },
    ],
  },
];
