import styled from "styled-components";
import { theme } from "./../globals";

export const NavbarStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
  background-color: ${theme.background};
`;

export const BrandStyled = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${theme.primary};
    font-family: "Permanent Marker", cursive;
    font-size: 1.8rem;
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
  padding: 0 1.2rem;
`;
export const NavbarMenuStyled = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
  a {
    color: ${theme.primary};
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.2rem;
  }
`;

export const SearchStyled = styled.div`
  display: block;
  padding: 20px;
  min-width: 160px;
  font-family: "Amiri", serif;
  font-size: 1.2rem;
  font-style: italic;
`;
