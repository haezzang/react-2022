import React from "react";
import ReactDom from "react-dom";


const div= <div>
    
    {true}
    {false}
    {undefined}
    {null}
    
    {/*boolean값은 랜더링 하지 않는다*/}
</div>


// const div2=<div>
//     <h1>Hello!</h1>
//     {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력 */}
//     {
//         unreadMessages.length > 0 &&
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//     }
// </div>



    // 조건문 중괄호 안에서는 분기문 사용불가
function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}
const div3= conditionalRender(18)


const age = 20
const div4 = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</>
)
const myStyle={color:"red",backgroundColor:"lightblue"}
const h1=<h1 style={myStyle}>Hello Style</h1>
ReactDom.render(h1,document.getElementById('root'))                   