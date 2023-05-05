import {  createContext, useState } from "react"
export const AuthContext=createContext()
function AuthContextProvider({children}){
    const [isAuth,setAuth]=useState(false)
    const login=()=>{
      return setAuth(true)
    }
    const logout=()=>{
      return  setAuth(false)
    }
    return(
  <AuthContext.Provider value={{isAuth,setAuth,login,logout}}>
    {children}
  </AuthContext.Provider>
    )
}
export default AuthContextProvider