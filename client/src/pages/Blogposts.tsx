import BlogpostSingle from "../components/Blogposts/BlogpostSingle";
import PageTitle from "../components/PageTitle";

const Blogposts: React.FC = () => {
  return (
    <>
      <PageTitle title="Add New Post" />
      <BlogpostSingle options={{ editable: true }} />
    </>
  );
};

export default Blogposts;
