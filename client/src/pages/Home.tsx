import BlogpostList from "../components/blogposts/BlogpostList";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Home = () => {
  const blogposts = useGetBlogposts();

  return <BlogpostList blogposts={blogposts} />;
};

export default Home;
