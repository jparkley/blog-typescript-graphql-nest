import React from 'react';

interface PostListProps {
  posts: {
    id: string,
    content: string,
    author: string ,   
  }[]
}
const Posts: React.FC<PostListProps> = props => {
 
  return (
    <div className="App">
      <h2>Posts</h2>
      <ul>{props.posts.map(post => {
          return (<li key={post.id}>{post.content} by {post.author}</li>)
      })}</ul>
    </div>
  );
}

export default Posts;
