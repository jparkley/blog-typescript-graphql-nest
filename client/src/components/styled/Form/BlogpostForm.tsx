import { ButtonDark } from "../Button/Button.styled";
import * as Styled from "./Form.styled";

const BlogpostForm: React.FC = () => {
  return (
    <Styled.Form>
      <Styled.Label>Title</Styled.Label>
      <Styled.Input />

      <Styled.Label>Content</Styled.Label>
      <Styled.TextArea />

      <Styled.Label>Author</Styled.Label>
      <Styled.Input />
      <ButtonDark>Add</ButtonDark>
    </Styled.Form>
  );
};
export default BlogpostForm;
