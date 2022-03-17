import React, { useState } from "react";
import { useCreateBlogpost } from "../../../hooks/useCreateBlogpost";
import { FormElement } from "../../../interfaces/FormElementInterface";
import { ButtonDark } from "../Button/Button.styled";
import * as Styled from "./Form.styled";

interface MyForm {
  formElements: FormElement[];
  buttonText: string;
}

const prepareForm = (formElements: FormElement[]) => {
  /*
    To fix Typescript error:
    Element implicitly has an 'any' type because expression of type 'keyof FormElement' can't be used to index type '{}'.
  */
  //let initialFormObject: { [key: string]: string } = {};
  let initialFormObject: Record<string, any> = {}; // Using built-in type Record<T,K>
  initialFormObject = formElements.reduce(
    (r, v) => ({ ...r, [v.name]: "" }),
    {}
  );
  return initialFormObject;
};

const BlogpostForm: React.FC<MyForm> = ({
  formElements,
  buttonText,
}: MyForm) => {
  const createBlogpost = useCreateBlogpost();

  const initialForm = prepareForm(formElements);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e: React.ChangeEvent<any>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { title, content, author } = form;

    createBlogpost({ variables: { input: { title, content, author } } });
  };

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
              <Styled.TextArea
                id={name}
                name={name}
                value={form[name as keyof FormElement]}
                onChange={(e) => onChangeHandler(e)}
              />
            ) : (
              <Styled.Input
                id={name}
                name={name}
                type={inputType}
                value={form[name as keyof FormElement]}
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

      <ButtonDark onClick={(e) => handleSubmit(e)}>{buttonText}</ButtonDark>
    </Styled.Form>
  );
};
export default BlogpostForm;
