import { useShellNavigate } from "@mfa/shell-router";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const shellNavigate = useShellNavigate();
  const navigate = useNavigate();

  const handleClickList = () => {
    navigate("/list");
  };
  const handleClickRemote2 = () => {
    shellNavigate("remote2");
  };
  return (
    <div>
      home
      <button onClick={handleClickList}>go to list</button>
      <button onClick={handleClickRemote2}>go to remote2</button>
    </div>
  );
};

export default Home;
