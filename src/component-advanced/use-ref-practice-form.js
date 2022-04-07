import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

/*
    요구 사항
    1. 모든 input 요소에 ref 연결해주기
    2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기
    3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
    4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
*/




function Form() {


    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name] : value
        });
         
    }

    const handleReset = () => {
        setState({
            name: '',
            email: '',
            password: ''
        });
    }

    // 1. 모든 input 요소에 ref 연결해주기
    return (
        <>
            <label>
                Name:
                <input type="text" placeholder="name" name="name" onChange={handleInputChange}  value={state.name}/>
            </label>
            <label>
                Email:
                <input type="text" placeholder="email"name="name" onChange={handleInputChange}  value={state.email} />
            </label>
            <label>
                Password:
                <input type="password" placeholder="password"name="name" onChange={handleInputChange}  value={state.password} />
            </label>

            <hr />

            {/* 2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기 */}
            <button>
                Focus Name Input
            </button>
            <button>
                Focus Email Input
            </button>
            <button>
                Focus Password Input
            </button>

            <hr />

            <button >FocuSubmit</button>

<           button onClick={
                handleReset
            }>Reset</button>


         
        </>
    )
}

// function Form() {

//     const nameInputRef = useRef()
//     const emailInputRef = useRef()
//     const passwordInputRef = useRef()

//     const [state, setState] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const handleSubmit = e => {
//        //e.preventDefault()

//         // 3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
//         console.log(nameInputRef.current.value,emailInputRef.current.value,passwordInputRef.current.value );

         
//     }

//     const handleReset = () => {
//         nameInputRef.current.value='';
//         emailInputRef.current.value='';
//         passwordInputRef.current.value='';
//     }

//     // 1. 모든 input 요소에 ref 연결해주기
//     return (
//         <>
//             <label>
//                 Name:
//                 <input type="text" placeholder="name" ref={nameInputRef} />
//             </label>
//             <label>
//                 Email:
//                 <input type="text" placeholder="email" ref={emailInputRef} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" placeholder="password" ref={passwordInputRef} />
//             </label>

//             <hr />

//             {/* 2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기 */}
//             <button onClick={() => {
//                 nameInputRef.current.focus()
//             }}>Focus Name input</button>
            
//             <button onClick={() => {
//                 emailInputRef.current.focus()
//             }}>Focus Email input</button>
    

//             <button onClick={() => {
//                 passwordInputRef.current.focus()
//             }}>Focus Password input</button>

//             <hr />

//             <button onClick={() => {
//                 handleSubmit()
//             }}>FocuSubmit</button>

// <           button onClick={() => {
//                 handleReset()
//             }}>Reset</button>


         
//         </>
//     )
// }

ReactDOM.render(<Form />, document.getElementById("root"))