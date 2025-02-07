import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      remote2
      {children}
    </div>
  );
};

export default Layout;
