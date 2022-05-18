import React, { useReducer } from "react"
import ReactDOM from "react-dom"

// reducer 함수 정의 (함수의 역할은 이전 상태를 받아서 새 상태를 반환하는 것 (단, 이전 상태는 불변으로 취급))
// reducer 함수는 순수 함수(pure function)임을 유의
function reducer(state, action) {
    // 전달된 파라미터값의 의미
    // (state => 이전 상태값, action => dispatch 함수를 통해 전달된 action)
    if(action.type === 'INCREASE') {
        // 기존의 state는 참조만 하고, 새 상태를 반환함을 유의!
        return { count: state.count + 1 }
    } else if(action.type === 'DECREASE') {
        return { count: state.count - 1 }
    }else if(action.type === 'ADD') {
        return { count: state.count + action.amount  }
    } 
    else {
        // 어떤 종류의 action도 해당하지 않는 경우 상태를 그대로 반환 (상태 변경 X)
        return state
    }
}

function CounterUsingReducer(props) {
    // useReducer 함수로 reducer 함수와 초기 상태(객체) 전달
    // 반환값은 현재 상태(state)와 액션 값을 전달할 dispatch 함수
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <p>count : { state.count }</p>
            {/*
                dispatch 함수를 통해 액션값 전달
                (액션값의 타입은 아무거나 가능(보통은 객체 사용), 여기서는 문자열 전달)
            */}
            <button onClick={() => dispatch({type : Action.INCREASE})}>+10</button><br />
            <button onClick={() => dispatch({type : Action.DECREASE})}>INCREASE</button>
            <br />
            <button onClick={() => dispatch({type : 'DECREASE'})}>DECREASE</button>
        </div>
    )
}

ReactDOM.render(<CounterUsingReducer />, document.getElementById("root"));

//1. useReducer 훅=>reducer 함수와 초기 상태 받는 훅 reducer 함수가 작동하여 새 상태를 반환할 경우 리렌더링 유발 및 새 사ㅏㅇ태를 반환해주는 역할을 수행
//2. reducer 함수 => 상태랑 액션(수행할 작업 정보가 담긴 객체)를 받아서 새 상태를 반환하는 함수 (단, 변경 사항이 없으면 기존 상태 반환 가능)
//3. 액션 => dispatch 함수를 통해 reducer 함수로 전다할 작업에 대한 내용이 담긴 객체
//4. 액션 상수 => 액션의 type 문자열 값을 상수화 (오타 방지 및 명령어 문자열 변경 가능 용이하게 만들기 위해서)
//5. 액션 생성 함수 => 액션을 매번 만들지 않고 함수 호출을 통해서 액션 객체를 반환해주는 함수 (실수 방지 및 코드 가독성 향상)
// (*)는 필수는 아님
