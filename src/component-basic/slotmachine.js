import React from "react";
import ReactDom from "react-dom";





const SlotMachine=function(props){

    const { s1, s2, s3 } = props
    const same= s1===s2 && s2===s3;
    const seven=same&&s1==="7";

    return <>
    <p>{s1} {s2} {s3}</p> 
    {   //조건부랜더링
        same&&  <p  style={seven ? { color: 'red' } : null} >Congrats!</p>
    }
    </>
    }


    const App=props=>{
        return(
            <div>
                <SlotMachine s1="X" s2="Y" s3="Z" />
                <SlotMachine s1="X" s2="X" s3="X" />
                <SlotMachine s1="7" s2="7" s3="7" />
                <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
                <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
            </div>
        )
    }

ReactDom.render(<App/>, document.getElementById("root"))
