import { InjectFuncType, useShellEvent } from "@mfa/shell-router";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appRemote2Basename } from "../shared/constants/prefix";
import { importRemote } from "@module-federation/utilities";

const AppRemote2 = () => {
  const location = useLocation();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent("remote2", appRemote2Basename);

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    isFirstRunRef.current = false;

    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3002",
      scope: "remote2",
      module: "injector",
      remoteEntryFileName: "remoteEntry.js",
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appRemote2Basename, ""),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-remote2" />;
};

export default AppRemote2;
