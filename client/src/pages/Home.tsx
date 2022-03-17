import BlogpostCards from "../components/Blogposts/BlogpostCards";
import PageTitle from "../components/PageTitle";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Home = () => {
  const blogposts = useGetBlogposts();

  return (
    <>
      <PageTitle title="Most Read" />
      <BlogpostCards blogposts={blogposts} />
    </>
  );
};

export default Home;
