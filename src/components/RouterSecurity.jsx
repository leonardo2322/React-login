import {  useParams,Outlet } from "react-router-dom"

const RouterSecurity = ({children, redirecTo = "/login"}) => {
  const {id} = useParams()

  if (id === true){
    return children
  }
  return children ? children : <Outlet />
}

export default RouterSecurity