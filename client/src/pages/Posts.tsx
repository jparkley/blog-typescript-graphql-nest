import React from 'react';
import { Post } from '../common/interfaces/PostInterface'
import { PostsProps } from '../common/interfaces/PostsPropsInterface'
// export interface PostsProps {
//   posts: Post[]
// }

const Posts: React.FC<PostsProps> = ({posts}: PostsProps) => {
 
  return (
    <div className="App">
      <h2>Posts</h2>
      <ul>{posts.map(post => {
          return (<li key={post.id}>{post.content} by {post.author}</li>)
      })}</ul>
    </div>
  );
}

export default Posts;
