import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      remote1
      {children}
    </div>
  );
};

export default Layout;
