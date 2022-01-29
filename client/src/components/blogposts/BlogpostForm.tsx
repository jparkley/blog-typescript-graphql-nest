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
        console.log(content);        
        createBlogpost({ variables: {input: {title, content, author}}})        
    })
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <h2>New Post</h2>
                    <input type='text' {...register('title')} />
                    <input type='text' {...register('author')} />
                    <textarea {...register('content')} />                
                    <button type='submit'>Submit</button>                
            </form>            
        </>
    )
}

export default BlogpostForm
