import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
    state ={
        articles: [ ]
    }
    componentDidMount(){
        axios.get('http://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=3a6fdb5a481d4c859dc8b9c3455a7641')
        .then(res =>{
            this.setState({
               articles: res.data.articles.slice(0, 10)
            })
            console.log(res)
           console.log(this.state)
        })
    }
    render(){
        const {articles} = this.state;
        const articleList = articles.length ? (
            articles.map(article => {
                return(
                    <div key={article.id} className='card my-3'>
                        <div className='content card-block'>
                            <h5 className='title card-title'>{article.title}</h5>
                            <p className='card-text'>{article.description}</p>
                            <p className='text-center'>
                                By: {
                                    (article.author !== "" && article.author !== null) ? (article.author) : ('anonymous')
                                 }</p>
                            <a className='card-link' href={article.url}>See article</a>
                            
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='text-center py-2'> No posts yet. </div>
        )
        return(
            <div className='container'>
                <h4 className='text-center py-2'>Home</h4>
                <div className='container'>
                    <p> {articleList} </p>
                </div>
            </div>
        )
    }
}

export default Home