import React from 'react';
import { useGetposts } from '../../hooks/useGetPosts';
import PostSingle from './PostSingle';

const PostList: React.FC = () => {

    const posts = useGetposts()
   
    return (
      <div className="App">
        <h2>Posts</h2>
        <ul>{posts?.map(post => {
            return (<li key={post.id}><PostSingle post={post} /></li>)
        })}</ul>
      </div>
    );
  }
  
  export default PostList;
