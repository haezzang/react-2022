import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"


//Provider안에 있는 애들만 상태를 접근할 수 있다
const LoginUserContext = createContext(null)



function UserButton(props){


    const { loginUser, setLoginUser } = useContext(LoginUserContext)
    const [ fetching, setFetching ] = useState(false)

    

  

  
    const handleLogin = () => {
        setFetching(true)
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const login = data.results[0].login
                
                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
                setFetching(false)
              
            })
        
    }

    const handleLogout = () => {
        setLoginUser(null)
    }

    if(fetching) return <button disabled>...</button>

    return (
  
        <div>

            {
            loginUser===null?     
            <button onClick={handleLogout}>Logout</button>      
            :
            <>
            <img src={loginUser.picture} style={{ borderRadius: '50%' }}/>
                        <p>username: {loginUser.username}</p>
                        <p>email: {loginUser.propsemail}</p>
                        <p>cell: {loginUser.cell}</p>
            </>
            }
        </div>

        
    )


    
}
function App() {
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            {       
                        <UserButton />       
            }
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));