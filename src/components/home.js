import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
    state ={
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            this.setState({
                posts: res.data.slice(0, 10)
            })
        })
    }
    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div key={post.id} className='card my-3'>
                        <div className='content card-block'>
                            <h5 className='title card-title'>{post.title}</h5>
                            <p className='card-text'>{post.body}</p>
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
                    <p> {postList} </p>
                </div>
            </div>
        )
    }
}

export default Home