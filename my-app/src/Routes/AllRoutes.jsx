import {Routes,Route} from "react-router-dom"
import Login from "../component/login"
import Home from "../component/Home"
function AllRoutes(){
    return(
        <>
        <Routes>
          <Route path="/" element={<Login/>} />  
          <Route path="/Home" element={<Home/>} />  
        </Routes>
        </>
    )
}
export default AllRoutes