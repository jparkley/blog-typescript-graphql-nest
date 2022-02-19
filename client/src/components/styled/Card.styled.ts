import styled from "styled-components";

export const CardStyled = styled.div`
  font-size: 1.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 300px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 2px solid #333;
  border-radius: 5px 5px 5px 5px/25px 25px 25px 5px;
`;

export const CardHeaderStyled = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const CardBodyStyled = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
`;
