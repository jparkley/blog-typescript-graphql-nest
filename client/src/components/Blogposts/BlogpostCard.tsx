import { Blogpost } from "../../interfaces/BlogpostInterface";
import {
  CardBodyStyled,
  CardHeaderStyled,
  CardStyled,
} from "../styled/Card.styled";

const BlogpostCard: React.FC<{ blogpost: Blogpost }> = ({
  blogpost,
}: {
  blogpost: Blogpost;
}) => {
  return (
    <>
      <CardStyled>
        <CardHeaderStyled>
          {blogpost.title} - {blogpost.author}
        </CardHeaderStyled>

        <CardBodyStyled>{blogpost.content}</CardBodyStyled>
      </CardStyled>
    </>
  );
};

export default BlogpostCard;
