import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'



const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props.article

    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
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
                }}>검색</button>
            </div>
        )
    }

const NewsApp = (props) => {
    const [articles, setArticles] = useState([]) //네트워크 받을 때 설정
    const [loading, setLoading] = useState(true) //setLoading 무조건 있다
    const apiKey = '27a6b7dfeb634f7aadc517c02ff6b1d8'
   const [keyword, setKeyword]=useState(null)


    useEffect(() => {
        // 초기에 한 번만 API를 통해서 뉴스 데이터 읽어오기

        if(keyword){
        fetch(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}&q=${keyword}`) // 데이터를 전달할 주소 
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
                    ? loading ? <h1>뉴스를 불러오는 중입니다.</h1> : <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (
                                
                                <li key={idx}>
                                    <NewsItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

ReactDOM.render(<NewsApp />, document.getElementById("root"))

//usestate 리밴더, useRef 돔요소를 저장
