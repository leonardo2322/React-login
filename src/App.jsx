import "./App.css";
import Approuter from "./routers/Approuter";
import { useSelector } from "react-redux";

function App() {
  const userState = useSelector((state) => state.user);
  console.log(userState);
  return (
    <>
        <div className="container__Principal">
          <Approuter></Approuter>
        </div>
      
    </>
  );
}

export default App;
