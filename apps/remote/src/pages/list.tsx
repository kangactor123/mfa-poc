import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      list
      <button onClick={handleClick}>go to remote home</button>
    </div>
  );
};

export default List;
