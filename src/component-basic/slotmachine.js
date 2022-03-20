import React from "react";
import ReactDom from "react-dom";





const SlotMachine=function(props){
    const { s1, s2, s3 } = props
 
    if(s1===s2 && s2===s3) {
    return <>
    <p>{s1} {s2} {s3}</p>  
    <div style={(s1===7)? { color: 'red' } : null}>
    <p>Congrats!</p>
    </div>
    </>
    }

    else   return <p>{s1} {s2} {s3}</p>  
 

}
ReactDom.render(<SlotMachine s1="1" s2="1" s3="1" />, document.getElementById("root"))
