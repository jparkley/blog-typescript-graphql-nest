import BlogpostList from "../components/Blogposts/BlogpostList";
import PageTitle from "../components/PageTitle";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Home = () => {
  const blogposts = useGetBlogposts();

  return (
    <>
      <PageTitle title="New title Posts" />
      <BlogpostList blogposts={blogposts} />
    </>
  );
};

export default Home;
