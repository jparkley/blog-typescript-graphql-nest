import * as Styled from "./Form.styled";

const BlogpostForm: React.FC = () => {
  return (
    <Styled.Form>
      <Styled.FormControl>
        <Styled.Label>Title</Styled.Label>
        <Styled.Input />

        <Styled.Label>Content</Styled.Label>
        <Styled.TextArea />

        <Styled.Label>Author</Styled.Label>
        <Styled.Input />
        <Styled.Button>Add</Styled.Button>
      </Styled.FormControl>
    </Styled.Form>
  );
};
export default BlogpostForm;
