import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  padding: ${({ theme }) => theme.spacingMin};
  margin: 0 auto;
  display: grid;
  gap: 10px;
  grid-template-columns: 100px 1fr;
`;

export const Label = styled.span`
  //display: inline-block;
  font-weight: 500;
  line-height: 20px;
`;

export const Input = styled.input`
  //display: inline-block;
  outline: none;
  width: 500px;
  line-height: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacingMin};
`;

export const TextArea = styled.textarea`
  resize: none;

  overflow: hidden;
  outline: none;

  display: block;

  line-height: 40px;
  min-height: 120px;

  padding: 0 7px;
  margin: 0 0 30px;
  width: 500px;
`;

// export const Button = styled.button`
//   cursor: pointer;
//   display: block;
//   outline: none;
//   width: 300px;

//   justify-content: flex;
// `;
