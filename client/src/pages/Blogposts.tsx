import BlogpostForm from "../components/Blogposts/BlogpostForm";
import BlogpostList from "../components/Blogposts/BlogpostList";
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
