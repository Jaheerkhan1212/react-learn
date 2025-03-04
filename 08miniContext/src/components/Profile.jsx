import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile(){
    const {user}=useContext(UserContext);
    if(!user)return(<div>Please Log in</div>)
    return <div> Welcome {user.name}, your password is{user.pass}</div>
}
export default Profile