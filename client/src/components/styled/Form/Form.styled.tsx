import styled from "styled-components";
import { v } from "../variables";

export const Form = styled.form`
  width: 100%;
  padding: ${v.largeSpacing};
`;

export const FormControl = styled.div`
  width: 100%;
  /* background-color: #c9c8c8; */
`;
export const Label = styled.div`
  font-size: 14px;
  display: block;
  font-weight: 500;
  line-height: 20px;
`;

export const Input = styled.input`
  width: 300px;
  border-radius: 2px;
  margin-bottom: calc(${v.largeSpacing} / 4);
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  outline: none;
  width: 300px;
  margin-top: calc(${v.largeSpacing} / 3);
  justify-content: flex;
`;
