import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function Private({children}){
    const {isAuth} = useContext(AuthContext)
    if(!isAuth){
      return  <Navigate to="/"/>
    }
   return children
}
export default Private