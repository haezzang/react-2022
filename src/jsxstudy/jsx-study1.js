import React from "react";
import ReactDom from "react-dom";

const name='Josh Perez';
const element=<h1>Hello, {name}</h1>

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

// 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움 (자바스크립트 표현식을 모두 사용 가능, 단, if 구문이나 for 구문은 사용 불가)
const JSXwithExpressions = (   /* 괄호를 쓰거나, 첫번째 태그를 위로 올린다*/
    <h1>
         {/* 중괄호 넣고 js코드 작성 가능*/}
        {lst[0]}    
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)

ReactDom.render(JSXwithExpressions,document.getElementById('root'))