import { useEffect, useState } from 'react';
import Posts from './pages/Posts'

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
    <div className="App">
      Test
      <Posts posts={posts} />
    </div>
  );
}

export default App;
