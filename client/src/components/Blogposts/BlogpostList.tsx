import React from "react";
import { Blogpost } from "../../interfaces/BlogpostInterface";
import {
  ContainerGridStyled,
  WrapperStyled,
} from "../styled/Container/Container.styled";
import BlogpostCard from "./BlogpostCard";

const BlogpostList: React.FC<{ blogposts: Blogpost[] }> = ({
  blogposts,
}: {
  blogposts: Blogpost[];
}) => {
  return (
    <WrapperStyled>
      <ContainerGridStyled>
        {blogposts?.map((blogpost, i) => {
          return <BlogpostCard key={blogpost.id} blogpost={blogpost} />;
        })}
      </ContainerGridStyled>
    </WrapperStyled>
  );
};

export default BlogpostList;
