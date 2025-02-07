import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import { importRemote } from "@module-federation/utilities";

const RemoteApp = React.lazy(() =>
  importRemote({
    url: "http://localhost:3001",
    scope: "remote",
    module: "inject",
    remoteEntryFileName: "remoteEntry.js",
  })
);

const RemoteButton = React.lazy(() => import("remote/button"));

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <Suspense fallback={<div>Loading...</div>}>
      <RemoteButton />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <RemoteApp />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
