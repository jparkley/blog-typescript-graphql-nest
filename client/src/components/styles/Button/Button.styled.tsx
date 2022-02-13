import styled, { css } from "styled-components";

interface ButtonProps {
  readonly color?: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.theme[props.color]};
    `}
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;

  border: 2px solid transparent;
  border-radius: 255px 25px 225px 25px/25px 225px 25px 255px;
  display: inline-block;
  padding: 0.4rem 0.8rem;
  vertical-align: middle;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
