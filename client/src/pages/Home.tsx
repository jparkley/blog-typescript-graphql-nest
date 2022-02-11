import BlogpostList from "../components/blogposts/BlogpostList";
import { ContainerStyled } from "../components/styles/Container/Container.styled";
import { useGetBlogposts } from "../hooks/useGetBlogposts";

const Home = () => {
  const blogposts = useGetBlogposts();

  return (
    <ContainerStyled>
      <BlogpostList blogposts={blogposts} />
    </ContainerStyled>
  );
};

export default Home;
