import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CreateComment from './CreateComment';
import CommentList from './CommentList';

function PostList() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com/posts')
        console.log(res.data)
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => 
        <div key={post.id} className='col-4 p-20 border'>
            <h2 className="card-title">{post.title}</h2>
            <CommentList comments={post.comments} />
            <CreateComment postId={post.id} />
        </div>
    )

    return <div className='row'>{renderedPosts}</div>
}

export default PostList