import PostList from '../components/posts/PostList'
import { useGetposts } from '../hooks/useGetPosts'

const Home = () => {
    const posts = useGetposts()
    
    return (
        <div>
            <PostList posts={posts} />
        </div>
    )
}

export default Home
