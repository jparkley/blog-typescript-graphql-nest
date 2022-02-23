import * as Styled from "./Form.styled";

const Form: React.FC = () => {
  return (
    <Styled.Form>
      <Styled.FormControl>
        <Styled.Label>Title</Styled.Label>
        <Styled.Input />
        <Styled.Label>Content</Styled.Label>
        <Styled.Input />
        <Styled.Label>Author</Styled.Label>
        <Styled.Input />
        <Styled.Button>Add</Styled.Button>
      </Styled.FormControl>
    </Styled.Form>
  );
};
export default Form;
