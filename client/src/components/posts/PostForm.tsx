import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreatePost } from '../../hooks/useCreatePost'

interface FormData {
    title: string
    content: string
}

const PostForm:React.FC = () => {
    
    const { register, handleSubmit } = useForm<FormData>()
    const createPost = useCreatePost()

    const onSubmit = handleSubmit(({title, content}) => {
        console.log(title);
        console.log(content);        
        createPost({ variables: {input: {title, content}}})        
    })
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <h2>New Post</h2>
                    <input type='text' {...register('title')} />
                    <textarea {...register('content')} />                
                    <button type='submit'>Submit</button>                
            </form>            
        </>
    )
}

export default PostForm
