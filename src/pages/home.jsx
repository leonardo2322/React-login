import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"/home"}>home</Link></li>
          <li><Link to={"/me"}>me</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
