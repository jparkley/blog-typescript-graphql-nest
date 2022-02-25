import { useForm } from "react-hook-form";
import { useCreateBlogpost } from "../../hooks/useCreateBlogpost";
import { Blogpost } from "../../interfaces/BlogpostInterface";
import { CardBodyStyled, CardHeaderStyled } from "../styled/Card.styled";
import BlogpostForm from "../styled/Form/BlogpostForm";

interface FormData {
  title: string;
  content: string;
  author: string;
}
interface Options {
  editable: boolean;
}

const BlogpostSingle: React.FC<{ options: Options; blogpost?: Blogpost }> = ({
  blogpost,
}: {
  blogpost?: Blogpost;
}) => {
  const { register, handleSubmit } = useForm<FormData>();
  const createBlogpost = useCreateBlogpost();

  const onSubmit = handleSubmit(({ title, content, author }) => {
    console.log(title);
    createBlogpost({ variables: { input: { title, content, author } } });
  });

  return (
    <>
      <BlogpostForm></BlogpostForm>
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
