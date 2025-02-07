import { InjectFuncType, useShellEvent } from "@mfa/shell-router";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appRemoteBasename } from "../shared/constants/prefix";
import { importRemote } from "@module-federation/utilities";

const AppRemote = () => {
  const location = useLocation();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent("remote", appRemoteBasename);

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    isFirstRunRef.current = false;

    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3001",
      scope: "remote",
      module: "injector",
      remoteEntryFileName: "remoteEntry.js",
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appRemoteBasename, ""),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-remote" />;
};

export default AppRemote;
