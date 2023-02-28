import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/UserReducer";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(login(null));
    return navigate("/");
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Especificacion</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
      </table>
      <ul>
        <button onClick={() => handleClick()}>logout</button>
      </ul>
    </div>
  );
};

export default Home;
