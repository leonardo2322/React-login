import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from "../features/UserReducer";
const Home = () => {
  const dispatch  = useDispatch()
  const navigate = useNavigate()
  const handleClick = ()=>{
    console.log('aqui')
    dispatch(login(null))
    return navigate("/")
  }
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"/home"}>home</Link></li>
          <li><Link to={"/Profile"}>me</Link></li>
          <button onClick={()=> handleClick()}>logout</button>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
