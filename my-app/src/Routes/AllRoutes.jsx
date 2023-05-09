import {Routes,Route} from "react-router-dom"
import Login from "../component/login"
import Home from "../component/Home"
import Almost from "../component/Almost"
import Math from "../component/Math"
import History from "../component/History"
import Sceince from "../component/Sceince"
import Geography from "../component/Geography"
import Leader from "../component/Leader"
import Private from "../component/PrivateRoute"
function AllRoutes(){
    return(
        <>
        <Routes>
          <Route path="/" element={<Login/>} />  
          <Route path="/Home" element={<Home/>} />  
          <Route path="/Almost" element={ <Almost/>} />  
          <Route path="/Math" element={<Private><Math/></Private>} />  
          <Route path="/History" element={
          <Private><History/></Private>} />  
          <Route path="/Sceince" element={
            <Private><Sceince/></Private>
          } />  
          <Route path="/Geography" element={
            <Private><Geography/></Private>
          } />  
          <Route path="/Leader" element={
            <Private><Leader/></Private>
          } />  
              <Route path="*" element={<h1>Page Not Found 404</h1>} />  
        </Routes>
        </>
    )
}
export default AllRoutes