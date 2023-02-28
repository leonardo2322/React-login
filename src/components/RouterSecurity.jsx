import {  Navigate, Outlet } from "react-router-dom";

const RouterSecurity = ({ user,children, redirecTo = "/" }) => {
  console.log(user,children);
  if (!user){
    return <Navigate to={redirecTo} replace />;
  }

  return children ? children : <Outlet/>
}
export default RouterSecurity;
