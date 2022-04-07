import React, { useState } from "react";
import ReactDom from "react-dom";


//useState는 부모한테 붙어져있음


const TodoItem = function({ todo: { completed, text }, idx, handleTodoStatusToggle, handleTodoRemove }) {



    return (
        <div>
            <span style={completed ? { textDecoration: 'line-through' } : null}
                onClick={() => handleTodoStatusToggle(idx)}>
                {text}
            </span>&nbsp;

        s

            (중요도 : {count})
            <button onClick={()=>setCount(previous=>previous+1)}>중요도 증가</button>
            <button onClick={()=>setCount(previous=>previous-1)}>중요도 감소</button>
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
        </div>
    )
}

const TodoList = function({ todos, handleTodoStatusToggle, handleTodoRemove }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <TodoItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const TodoAdder = function({ handleTodoAdd }) {
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return (
        <div>
            <input type='text' onChange={handleChange} value={input} />
            <button onClick={() => {
                handleTodoAdd({ completed: false, text: input })
                setInput("")
            }}>추가</button>
        </div>
    )
}
//할 일의 중요도 설정하기,중요도순에 정렬하기
const TodoApp = function(props) {
    const [todos, setTodos] = useState([

    ])

    const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo))
    const handleTodoStatusToggle = todoIndex => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }
    const handleTodoRemove = todoIndex => {
        setTodos(todos => {
            return todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        })
    }

    return (
        <div>
            <TodoList todos={todos}
                handleTodoStatusToggle={handleTodoStatusToggle}
          
                handleTodoRemove={handleTodoRemove}/>
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

ReactDom.render(<TodoApp/>,document.getElementById("root"))