import { Outlet } from "react-router"
import Navbar from "./Navbar"





function LayoutWithoutAlert(){
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}



export default LayoutWithoutAlert