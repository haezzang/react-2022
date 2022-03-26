import React, { useState } from "react";
import ReactDom from "react-dom";

// const Counter=function(props){
//     const[count, setCount]=useState(0) //베열 구조분해
//     const[text, setText]=useState("a")
//     //리액트 이벤트는 카멜형식으로 작성
//     return(
//         <div>
//             <h1>{count}</h1>
//              세터함수는 나오지 않지만 밑줄코드는 나옴 한꺼번에 상태변경해서 다시 렌더링(더 효율적)
//             <button onClick={()=>setCount(previous=>previous+1)}>증가</button>
//             <button onClick={()=>setCount(count+1)}>증가</button>
//             <button onClick={()=>setCount(count-1)}>감소</button>
//             <br></br>
//             <h1>{text}</h1>
//             <button onClick={()=>setText(text+"a")}>a 추가</button>


//         </div>
//     )
// }
// ReactDom.render(<Counter/>,document.getElementById("root"))


//컴포넌트는 변경을 감지못함 그래서 객체를 참조하여 값을 변경한다=불변
const StateDemoComponent = function(props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({
        value1: "hello",
        value2: 1000
    })

    return (
        <div>
            <button onClick={() => {
                if(state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    setState({ ...state, value1: "bye" } )
                } else {
                    setState({ ...state, value1: "hello" } )
                }
            }}>{state.value1}</button>
            <br />
            <button onClick={() => {
                setState({ ...state, value2: state.value2 * 2 } )
            }}>{state.value2}</button>
        </div>
    )
}

ReactDom.render(<StateDemoComponent/>,document.getElementById("root"))
