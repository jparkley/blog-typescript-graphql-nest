import { Blogpost } from "../../interfaces/BlogpostInterface";
import { CardBodyStyled, CardHeaderStyled } from "../styled/Card.styled";

const BlogpostCard: React.FC<{ blogpost: Blogpost }> = ({
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

export default BlogpostCard;
