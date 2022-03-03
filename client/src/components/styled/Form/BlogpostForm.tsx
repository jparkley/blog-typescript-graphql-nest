import React, { useState } from "react";
import { useCreateBlogpost } from "../../../hooks/useCreateBlogpost";
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

const prepareForm = (formElements: FormElement[]) => {
  return formElements.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const BlogpostForm: React.FC<MyForm> = ({
  formElements,
  buttonText,
  onSubmit,
}: MyForm) => {
  const createBlogpost = useCreateBlogpost();
  //   const onSubmit = handleSubmit(({ title, content, author }) => {
  //     console.log(title);
  //     createBlogpost({ variables: { input: { title, content, author } } });
  //   });

  const initialForm = prepareForm(formElements);
  console.log("initialForm", initialForm);

  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e: React.ChangeEvent<any>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <Styled.Form autoComplete={"off"}>
      {formElements.map(
        (
          { label, name, inputType }: FormElement,
          index: number
        ): JSX.Element => (
          <>
            <Styled.Label key={index}>{label}</Styled.Label>
            {inputType === "textarea" ? (
              <Styled.TextArea id={name} name={name} />
            ) : (
              <Styled.Input
                id={name}
                name={name}
                type={inputType}
                // value={form[name as keyof ObjectType]}
                onChange={(e) => onChangeHandler(e)}
              />
            )}
          </>
        )
      )}

      {/* <form onSubmit={onSubmit}>
        Title: <input type="text" {...register("title")} />
        Content:
        <textarea {...register("content")} />
        Author: <input type="text" {...register("author")} />
        <button type="submit">Submit</button>
      </form> */}

      <ButtonDark onClick={onSubmit}>{buttonText}</ButtonDark>
    </Styled.Form>
  );
};
export default BlogpostForm;
