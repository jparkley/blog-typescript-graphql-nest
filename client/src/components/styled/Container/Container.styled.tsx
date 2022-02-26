import styled from "styled-components";

interface Props {
  justifyContent: string;
  paddingTop?: string;
  spacing?: string;
}

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
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;

export const ContainerGridStyled = styled.div`
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-gap: 30px;
  grid-auto-rows: minmax(200px, auto);
`;

export const ContainerFlexStyled = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${(p) => p.justifyContent};
  width: 100%;
  padding: ${(p) => p.spacing};
  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
