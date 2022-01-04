import React from 'react';
import { useGetposts } from '../hooks/useGetPosts';

const Posts: React.FC = () => {

  const posts = useGetposts()
 
  return (
    <div className="App">
      <h2>Posts</h2>
      <ul>{posts?.map(post => {
          return (<li key={post.id}>{post.content} by {post.author}</li>)
      })}</ul>
    </div>
  );
}

export default Posts;
