import BlogpostForm from "../components/Blogposts/BlogpostForm";
import PageTitle from "../components/PageTitle";

const Blogposts: React.FC = () => {
  return (
    <>
      <PageTitle title="Add New Post" />
      <BlogpostForm />
    </>
  );
};

export default Blogposts;
