import BlogpostList from "../components/Blogposts/BlogpostList";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Home = () => {
  const blogposts = useGetBlogposts();

  return <BlogpostList blogposts={blogposts} />;
};

export default Home;
