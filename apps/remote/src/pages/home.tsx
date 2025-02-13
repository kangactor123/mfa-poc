import { useShellNavigate } from "@mfa/shell-router";
import { useUserStore } from "@mfa/store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useUserStore();
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
      <div>
        user: {user.name}
        <button onClick={() => setUser({ name: "remote user" })}>update</button>
      </div>
      <button onClick={handleClickList}>go to list</button>
      <button onClick={handleClickRemote2}>go to remote2</button>
    </div>
  );
};

export default Home;
