import React from "react";
import ReactDom from "react-dom";

//꼭 컴포넌트는 대문자로 시작
const ComponentWithProps=function(props){
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

//구조분해 할당하여 소스코드 줄이기
const Greeting=function({name, age}) {
    return <h1>Hello {name} {age} </h1>
}

ReactDom.render(<Greeting name= "해정" age={19}/>,document.getElementById('root'))