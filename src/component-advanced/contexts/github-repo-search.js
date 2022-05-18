import React, { useState, useEffect, useRef , useContext, createContext } from "react"
import ReactDOM from "react-dom"



//서치앱, 리스트, 프로아이테므 서지
const RepoItem = (props) => {
    const {title} = props.article

    return (
        <div>
            <p>{title}</p>
        </div>
    )
} 




    const Search=({onSubmit})=>{
        const[input, setInput]=useState('')
        return(
            <div>
                <input type="text"
                onChange={e=>setInput(e.target.value)} value={input}/>
                <button onClick={e=>{
                    if(input.trim().length!==0) onSubmit(input)
                }}>사용자 검색</button>
            </div>
        )
    }

const App = (props) => {
    const [articles, setArticles] = useState([]) //네트워크 받을 때 설정
    const [loading, setLoading] = useState(true) //setLoading 무조건 있다
   const [keyword, setKeyword]=useState(null)

    useEffect(() => {
        // 초기에 한 번만 API를 통해서 뉴스 데이터 읽어오기

        if(keyword){
            fetch("https://api.github.com/users?&q=${keyword}/repos', {headers:{Authorization:'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'} }") // 데이터를 전달할 주소 
            .then(res => res.json()) //resolve 호출시키면 then  result fetch  res는 text고 제이슨객체로 변환한다
            .then(data => {
                console.log(data);
                // 데이터 설정 및 로딩 상태 갱신
                setArticles(data.articles)
                setLoading(false)
            })
        }
        
    }, [keyword])
    return (
        <div>
      <Search onSubmit={setKeyword}/>
            {
             
                articles.length === 0
                    ? loading ? <h1>리퍼지토리를 불러오는 중입니다.</h1> : <h1>표시할 리퍼지토리가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (
                                
                                <li key={idx}>
                                    <RepoItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));