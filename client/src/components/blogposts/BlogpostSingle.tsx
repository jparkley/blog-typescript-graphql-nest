import { Blogpost } from '../../common/interfaces/BlogpostInterface'

const BlogpostSingle:React.FC<{blogpost: Blogpost}> = ({blogpost}: {blogpost:Blogpost}) => {
    return (
        <div>
           {blogpost.title} - {blogpost.author}
           <div>{blogpost.content}</div>
        </div>
    )
}

export default BlogpostSingle
