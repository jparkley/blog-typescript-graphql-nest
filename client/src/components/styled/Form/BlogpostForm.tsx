import { FormElement } from "../../../interfaces/FormElementInterface";
import { ButtonDark } from "../Button/Button.styled";
import * as Styled from "./Form.styled";

interface MyForm {
  formElements: FormElement[];
  buttonText: string;
  onSubmit: any;
}
/*
const BlogpostForm: React.FC<{
    formElements: FormElement[];
    buttonText: string;
    onSubmit: any;
  }> = ({ formElements, buttonText, onSubmit }: MyForm) => {
*/
const BlogpostForm: React.FC<MyForm> = ({
  formElements,
  buttonText,
  onSubmit,
}: MyForm) => {
  console.log("onsubmit", onSubmit);

  return (
    <Styled.Form>
      {formElements.map(
        (
          { label, name, inputType }: FormElement,
          index: number
        ): JSX.Element => (
          <>
            <Styled.Label>{label}</Styled.Label>
            {inputType === "textarea" ? <Styled.TextArea /> : <Styled.Input />}
          </>
        )
      )}
      <ButtonDark>{buttonText}</ButtonDark>
    </Styled.Form>
  );
};
export default BlogpostForm;
