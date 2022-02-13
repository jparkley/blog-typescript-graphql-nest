import styled from "styled-components";
export const WrapperStyled = styled.div`
  flex-direction: column;
  height: 100%;
  margin: 0px auto;
  padding: 0 20px;
  width: 100%;

  h2 {
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const ContainerStyled = styled.div`
  flex-direction: column;
  height: 100%;
  margin: 0px auto;
  padding: 20px;
  width: 90%;
`;

export const ContainerGridStyled = styled.div`
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-gap: 30px;
  grid-auto-rows: minmax(200px, auto);
`;