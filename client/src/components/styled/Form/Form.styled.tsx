import styled from "styled-components";
import { v } from "../variables";

export const Form = styled.form`
  width: 70%;
  padding: ${v.largeSpacing};
  margin: 0 auto;
`;

export const FormControl = styled.div`
  width: 80%;
  display: grid;
  gap: 10px;
  grid-template-columns: 100px 1fr;
  /* background-color: #c9c8c8; */
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
  margin-bottom: calc(${v.largeSpacing} / 4);
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

export const Button = styled.button`
  cursor: pointer;
  display: block;
  outline: none;
  width: 300px;
  margin-top: calc(${v.largeSpacing} / 3);
  justify-content: flex;
`;
