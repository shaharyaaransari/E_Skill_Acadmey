import {Routes,Route} from "react-router-dom"
import Login from "../component/login"
import Home from "../component/Home"
import Almost from "../component/Almost"
function AllRoutes(){
    return(
        <>
        <Routes>
          <Route path="/" element={<Login/>} />  
          <Route path="/Home" element={<Home/>} />  
          <Route path="/Almost" element={<Almost/>} />  
        </Routes>
        </>
    )
}
export default AllRoutes