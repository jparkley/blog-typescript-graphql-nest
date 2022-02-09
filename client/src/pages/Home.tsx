import BlogpostList from "../components/blogposts/BlogpostList";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Home = () => {
  const blogposts = useGetBlogposts();

  return (
    <div>
      <BlogpostList blogposts={blogposts} />
    </div>
  );
};

export default Home;
