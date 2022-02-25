import React from "react";
import { Blogpost } from "../../interfaces/BlogpostInterface";
import { CardStyled } from "../styled/Card.styled";
import {
  ContainerGridStyled,
  WrapperStyled,
} from "../styled/Container/Container.styled";
import BlogpostSingle from "./BlogpostSingle";

const BlogpostList: React.FC<{ blogposts: Blogpost[] }> = ({
  blogposts,
}: {
  blogposts: Blogpost[];
}) => {
  return (
    <WrapperStyled>
      <ContainerGridStyled>
        {blogposts?.map((blogpost) => {
          return (
            <CardStyled key={blogpost.id}>
              <BlogpostSingle
                blogpost={blogpost}
                options={{ editable: false }}
              />
            </CardStyled>
          );
        })}
      </ContainerGridStyled>
    </WrapperStyled>
  );
};

export default BlogpostList;
