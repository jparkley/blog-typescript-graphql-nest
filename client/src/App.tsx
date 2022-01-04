import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Posts from './pages/Posts'
import Header from './components/layout/Header'

const GRAPHQL_URL = 'http://localhost:5000/graphql'

const App: React.FC = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts: any = async () => {
      const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            query {
              posts {
                id
                content
                author
              }
            }        
          `
        })
        })
        const {data} = await response.json()
        
        if (data) {
          const { posts } = data          
          setPosts(posts)
        }
    }
    getPosts()
  }, [])

   //const posts = [{"id":"post 2","content": "content2","author": "jp"}]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Posts posts={posts} />} />
        <Route path='/about' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
