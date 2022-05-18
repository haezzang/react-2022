import React from "react";
import ReactDom from "react-dom";

const DrawStar= function(props){

    const {num} =props
  
    const star =""
    for(let i=0; i<{num}; i++){
        for(let j=0; j<i; j++){
            star+="*"
            
        }
        star+=<br></br>
    }
    return <>
    <p>star</p>
    </>
}
ReactDom.render(<DrawStar num={3} />, document.getElementById("root"));