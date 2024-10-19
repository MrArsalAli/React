import { Outlet } from "react-router"
import Alert from "./Alert"
import Navbar from "./Navbar"




function LayoutWithAlert() {
    return(
        <>
        <Alert />
        <Navbar />

        <Outlet />
        </>
    )
}



export default LayoutWithAlert