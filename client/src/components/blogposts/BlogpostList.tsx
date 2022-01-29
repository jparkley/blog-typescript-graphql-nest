import React from 'react';
import { Blogpost } from '../../common/interfaces/BlogpostInterface';
import BlogpostSingle from './BlogpostSingle';

const BlogpostList: React.FC<{blogposts: Blogpost[]}> = ({blogposts}: {blogposts: Blogpost[]}) => {    
   
    return (
      <div className="App">
        <h2>Posts</h2>
        <ul>{blogposts?.map(blogpost => {
            return (<li key={blogpost.id}><BlogpostSingle blogpost={blogpost} /></li>)
        })}</ul>
      </div>
    );
  }
  
  export default BlogpostList;
