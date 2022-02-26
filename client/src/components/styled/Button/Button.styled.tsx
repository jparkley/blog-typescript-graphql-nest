import styled, { css } from "styled-components";
import { theme } from "../globals";

interface ButtonProps {
  readonly color?: string;
}

export const ButtonDark = styled.button<ButtonProps>`
  background-color: ${theme.bgMidnightBlue};
  color: #fff;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0.5rem;
  &:hover {
    background-color: #eee;
    color: ${theme.textDark1};
  }
`;

export const ButtonLight = styled.button<ButtonProps>`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.theme[props.color]};
    `}
  color: #fff;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0.5rem;
  &:hover {
    background-color: #eee;
    color: ${theme.textDark1};
  }
`;

export const ButtonCustom = styled.button<ButtonProps>`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.theme[props.color]};
    `}
  color: #fff;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0.5rem;
  &:hover {
    background-color: #eee;
    color: ${theme.textDark1};
  }
`;
