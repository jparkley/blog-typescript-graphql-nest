import { Blogpost } from "../../interfaces/BlogpostInterface";
import { CardBodyStyled, CardHeaderStyled } from "../styles/Card.styled";

const BlogpostSingle: React.FC<{ blogpost: Blogpost }> = ({
  blogpost,
}: {
  blogpost: Blogpost;
}) => {
  return (
    <>
      <CardHeaderStyled>
        {blogpost.title} - {blogpost.author}
      </CardHeaderStyled>

      <CardBodyStyled>{blogpost.content}</CardBodyStyled>
    </>
  );
};

export default BlogpostSingle;
