import React from 'react'
import { useForm } from 'react-hook-form'
import PostList from '../components/posts/PostList'
import { useGetposts } from '../hooks/useGetPosts'

interface FormData {
    title: string
    content: string
}

const Posts:React.FC = () => {
    const posts = useGetposts()
    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit = handleSubmit(({title, content}) => {
        console.log(title);
        console.log(content);                
    })
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <h2>New Post</h2>
                    <input type='text' {...register('title')} />
                    <textarea {...register('content')} />                
                    <button type='submit'>Submit</button>                
            </form>
            <PostList posts={posts} />
        </>
    )
}

export default Posts
