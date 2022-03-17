import { Blogpost } from "../../interfaces/BlogpostInterface";
import { CardBodyStyled, CardHeaderStyled } from "../styled/Card.styled";
import BlogpostForm from "../styled/Form/BlogpostForm";

export interface BlogpostFormInput {
  title: string;
  content: string;
  author: string;
}

interface Options {
  editable: boolean;
}

const formElements = [
  {
    label: "Title",
    name: "title",
    inputType: "text",
  },
  {
    label: "Content",
    name: "content",
    inputType: "textarea",
  },
  {
    label: "Author",
    name: "author",
    inputType: "text",
  },
];

const BlogpostSingle: React.FC<{ options: Options; blogpost?: Blogpost }> = ({
  options,
  blogpost,
}: {
  options: Options;
  blogpost?: Blogpost;
}) => {
  return (
    <>
      {options.editable && (
        <BlogpostForm
          formElements={formElements}
          buttonText="add"
          // register={register}
          // onSubmit={onSubmit}
        />
      )}

      <CardHeaderStyled>{blogpost && blogpost.title}</CardHeaderStyled>

      <CardBodyStyled>{blogpost && blogpost.content}</CardBodyStyled>
    </>
  );
};

export default BlogpostSingle;
