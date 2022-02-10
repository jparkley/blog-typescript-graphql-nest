import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 6px;
  margin: 0 auto;

  border-radius: 0 25px 225px 0/25px 0 25px 255px;
  border-width: 0 0 2px;
  border-color: #154360;
  border-style: solid;
`;

export const BrandStyled = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    color: teal;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  img {
    width: 50px;
    transform: rotate(20deg);
  }
`;

export const BrandLogoStyled = styled.img`
  width: 30px;
  height: 30px;
`;

export const LinkStyled = styled.a`
  font-size: 14px;
  color: teal;
  text-decoration: none;
  padding: 0.5rem 1rem;
`;
export const NavbarMenuStyled = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 14px;
    color: teal;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;
