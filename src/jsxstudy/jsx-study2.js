import React from "react";
import ReactDom from "react-dom";


const div= <div>
    
    {true}
    {false}
    {undefined}
    {null}
    
    {/*boolean값은 랜더링 하지 않는다*/}
</div>

const div2= <div>
    <h1>Hello!</h1>
    {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력 */}
    {
        unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
    }
    </div>

ReactDom.render(div2,document.getElementById('root'))