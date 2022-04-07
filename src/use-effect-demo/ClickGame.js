import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Timer = function(props) {
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })

    useEffect(() => {
        console.log('setInterval');
        const id = setInterval(() => {
            setTimerState(prevState => {
                console.log('from setInterval', id)
                if( prevState.time === 1 ) {
                    console.log('clearInterval (by timeout)')
                    clearInterval(id)
                    return { ...prevState, timeout: true, time: prevState.time - 1}
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
            return () => {
                      if(timerState.time>0){
                        clearInterval(id)
                      }
                      
                    }

    }, [])

    return (
        <div>
            {timerState.timeout ? <h2>timeout</h2> : <h2>{timerState.time}</h2>}
        </div>
    )
}

const App = function(props) {
    const [trigger,setTrigger] = useState(false)
    const [click, setCount]  = useState(false)
    const increase = () => setCount(prev => prev + 1)

    return (
        <div>
            {
            
                !trigger && <div>
                    남은시간 : <Timer time={10} />
                </div>
            }
            <button onClick={ t? () => setTrigger(true) : increase  } >버튼클릭</button>
                    <p>클릭횟수 :  {click} </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))