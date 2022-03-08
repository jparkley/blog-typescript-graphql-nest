import { useForm } from "react-hook-form";
import { useCreateBlogpost } from "../../hooks/useCreateBlogpost";
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
  const { register, handleSubmit } = useForm<BlogpostFormInput>();
  const createBlogpost = useCreateBlogpost();

  const onSubmit = handleSubmit(({ title, content, author }) => {
    console.log(title);
    createBlogpost({ variables: { input: { title, content, author } } });
  });

  return (
    <>
      {options.editable && (
        <BlogpostForm
          formElements={formElements}
          buttonText="add"
          register={register}
          onSubmit={onSubmit}
        />
      )}

      <form onSubmit={onSubmit}>
        Title: <input type="text" {...register("title")} />
        Content:
        <textarea {...register("content")} />
        Author: <input type="text" {...register("author")} />
        <button type="submit">Submit</button>
      </form>
      <CardHeaderStyled>{blogpost && blogpost.title}</CardHeaderStyled>

      <CardBodyStyled>{blogpost && blogpost.content}</CardBodyStyled>
    </>
  );
};

export default BlogpostSingle;
