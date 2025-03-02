import React, { useEffect, useState } from "react";
function Github(){
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch("https://api.github.com/users/jaheerkhan1212")
        .then((res)=>res.json()).then((data)=>setData(data));
    },[]);
    return(
        <>
        <div> Follwers: {data.followers}</div>
        <img src={data.avatar_url} alt="img loading" /></>
    )
}
export default Github