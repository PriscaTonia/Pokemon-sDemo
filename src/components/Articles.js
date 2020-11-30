import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
    const [articles, setArticles] = useState(null);
    useEffect(()=>{
        setTimeout(
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                const data = res.data.slice(0, 10);
                setArticles(data);
            })
            )
    }, 3000)
       
        return(
            <div className=' articles'>
                <h1 className='text-center py-2'>Articles</h1>
                   
                {articles && articles.map(article =>{
                    return(
                    <div className='card p-2' key={article.id}>
                        <div className='card-body'>
                            <h3 className=' card-title'>
                                {article.title}
                            </h3>
                            <p className='card-text'>
                                {article.body}
                            </p>
                        </div>
                    </div> 
                    )
                    })
                    }

                   {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n}/>)}
                </div>
        )
}

export default Articles