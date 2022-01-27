import React from 'react'
import PostForm from '../components/posts/PostForm'
import PostList from '../components/posts/PostList'
import { useGetposts } from '../hooks/useGetPosts'



const Posts:React.FC = () => {
    const posts = useGetposts()
   
    return (
        <>
            <h2>Add Post</h2>
            <PostForm />
            <h2>Posts</h2>
            <PostList posts={posts} />
        </>
    )
}

export default Posts
