import React, { Component } from 'react'
import axios from 'axios'
import { response } from 'express'




class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { posts } = this.state
        return (
        <div>
            List of posts
            {
                posts.length ?
                posts.map(post => <div key ={post.id}>{post.Name}</div>):
                null
            };
        </div>
        )
    }
}

export default PostList