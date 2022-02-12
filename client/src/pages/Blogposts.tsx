import BlogpostForm from "../components/blogposts/BlogpostForm";
import BlogpostList from "../components/blogposts/BlogpostList";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Blogposts: React.FC = () => {
  const blogposts = useGetBlogposts();

  return (
    <>
      <BlogpostForm />
      <h2>Posts</h2>
      <BlogpostList blogposts={blogposts} />
    </>
  );
};

export default Blogposts;
