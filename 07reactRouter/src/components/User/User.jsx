import React from "react";
import { useParams } from "react-router-dom";
function Userpara(){
    const {userId}=useParams();
    return (
        <div>User:{userId}</div>
    )
}
export default Userpara