import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  useNavigate();
  return (
    <div>
      remote1
      {children}
    </div>
  );
};

export default Layout;
