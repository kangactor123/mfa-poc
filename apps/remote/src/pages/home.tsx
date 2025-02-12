import { useShellNavigate } from "@mfa/shell-router";
import { lazy, Suspense, use } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "host/store";

// const useStore = lazy(() => import("host/store"));

const App = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  console.log(count);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <p>count: {count}</p>
      <button onClick={increment}>+</button>
    </Suspense>
  );
};

console.log(useStore);
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
      <App />
      <button onClick={handleClickList}>go to list</button>
      <button onClick={handleClickRemote2}>go to remote2</button>
    </div>
  );
};

export default Home;
