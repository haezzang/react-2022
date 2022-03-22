import React, { useState } from "react";
import ReactDom from "react-dom";

const UserProfile=function(props){
    const[userName,setName]=useState("조해정") 
    const[userAge, setAge]=useState(19)
    const[userAddress, setAddress]=useState("@")
    return(
        <div>
         
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{userAddress}</h1>
           


        </div>
    )
}
ReactDom.render(<UserProfile/>,document.getElementById("root"))