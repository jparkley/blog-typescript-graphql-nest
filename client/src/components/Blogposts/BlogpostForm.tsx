import { useForm } from 'react-hook-form'
import { useCreateBlogpost } from '../../hooks/useCreateBlogpost'

interface FormData {
    title: string
    content: string
    author: string
}

const BlogpostForm:React.FC = () => {

    const { register, handleSubmit } = useForm<FormData>()
    const createBlogpost = useCreateBlogpost()

    const onSubmit = handleSubmit(({title, content, author}) => {
        console.log(title);
        createBlogpost({ variables: {input: {title, content, author}}})        
    })
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <h2>New Post</h2>
                    Title: <input type='text' {...register('title')} />
                    Content:
                    <textarea {...register('content')} />                
                    Author: <input type='text' {...register('author')} />
                    <button type='submit'>Submit</button>                
            </form>            
        </>
    )
}

export default BlogpostForm
