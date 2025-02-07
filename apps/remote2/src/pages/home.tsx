import { useShellNavigate } from "@mfa/shell-router";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const shellNavigate = useShellNavigate();
  const navigate = useNavigate();

  const handleClickList = () => {
    navigate("/list");
  };
  const handleClickRemote = () => {
    shellNavigate("remote");
  };
  return (
    <div>
      home
      <button onClick={handleClickList}>go to list</button>
      <button onClick={handleClickRemote}>go to remote</button>
    </div>
  );
};

export default Home;
