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


// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
        //className 인 이유는 html의 class 예약어와 겹침
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'

}

const PersonProfileObj = function(obj) {
    const {name, age, gender, profile, highlight}=obj.person;
    console.log(obj.person);
    return (
        //className 인 이유는 html의 class 예약어와 겹침
        <div className='person' style={obj.highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}
ReactDom.render(<PersonProfileObj {...anotherPerson} />,document.getElementById('root'))


// ReactDom.render(
//     <div>
//      <PersonProfile name='John' age={32} gender='male'
//     profile='https://randomuser.me/api/portraits/men/75.jpg' />
//     </div>,document.getElementById('root'))
//ReactDom.render(<Greeting name= "해정" age={19}/>,document.getElementById('root'))npmn