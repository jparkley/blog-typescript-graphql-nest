import React from 'react'
import { Post } from '../../common/interfaces/PostInterface'

const PostSingle:React.FC<{post: Post}> = ({post}: {post:Post}) => {
    return (
        <div>
           {post.title} - {post.author}
           <div>{post.content}</div>
        </div>
    )
}

export default PostSingle
