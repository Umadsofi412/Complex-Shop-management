import React,{useContext} from "react";
import { AuthContext } from "./context/authContext";

const LogoutButton = () => {
    const {logout} = useContext(AuthContext)

    return(
        <button className="nav-btn1" onClick={logout}>Logout</button>
    )
}
 export default LogoutButton;