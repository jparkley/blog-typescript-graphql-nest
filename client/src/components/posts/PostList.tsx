import React from 'react';
import { Post } from '../../common/interfaces/PostInterface';
import PostSingle from './PostSingle';

const PostList: React.FC<{posts: Post[]}> = ({posts}: {posts: Post[]}) => {    
   
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
