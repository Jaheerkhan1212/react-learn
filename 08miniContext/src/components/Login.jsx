import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext.js";

function Login(){
    const handlesubmit=(e)=>{
      e.preventDefault();
      setUser({name,pass});
    }
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    const {setUser}=useContext(UserContext);
    return(
     <>
      <h1>Log in</h1>  
      <input type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <input type="text"
      value={pass}
      onChange={(e)=>setPass(e.target.value)}/>
      <button onClick={handlesubmit}>Submit</button>
      </>
    )
}
export default Login