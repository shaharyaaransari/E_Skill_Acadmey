import {Routes,Route} from "react-router-dom"
import Login from "../component/login"
import Home from "../component/Home"
import Almost from "../component/Almost"
import Math from "../component/Math"
import History from "../component/History"
import Sceince from "../component/Sceince"
import Geography from "../component/Geography"
function AllRoutes(){
    return(
        <>
        <Routes>
          <Route path="/" element={<Login/>} />  
          <Route path="/Home" element={<Home/>} />  
          <Route path="/Almost" element={<Almost/>} />  
          <Route path="/Math" element={<Math/>} />  
          <Route path="/History" element={<History/>} />  
          <Route path="/Sceince" element={<Sceince/>} />  
          <Route path="/Geography" element={<Geography/>} />  
        </Routes>
        </>
    )
}
export default AllRoutes