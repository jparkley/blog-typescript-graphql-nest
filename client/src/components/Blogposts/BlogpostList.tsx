import React from "react";
import { Blogpost } from "../../interfaces/BlogpostInterface";
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
            <BlogpostSingle
              key={blogpost.id}
              blogpost={blogpost}
              options={{ editable: false }}
            />
          );
        })}
      </ContainerGridStyled>
    </WrapperStyled>
  );
};

export default BlogpostList;
