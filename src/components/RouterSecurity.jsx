import { useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";

const RouterSecurity = ({ children, redirecTo = "/login" }) => {
  const user = useSelector((state) => state.user);

  return user.user === true ? children : <Navigate to={redirecTo} replace />;
}
export default RouterSecurity;
