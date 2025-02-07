declare const inject: ({ rootElement, basePath, routerType, }: {
    rootElement: HTMLElement;
    basePath?: string;
    routerType: import("@mfa/shell-router").RouterType;
}) => () => void;
export default inject;
