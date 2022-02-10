import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  /* background-color: "#28a745"; */
  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `}

  margin-left: 20px;
  margin-bottom: 10px;
  display: "inline";
`;
