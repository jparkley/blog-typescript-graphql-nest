import styled from "styled-components";
import { theme } from "../globals";

export const Navbar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
  background-color: ${theme.bgLightCreme};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${theme.textDark1};
    font-family: "Permanent Marker", cursive;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
  }
  img {
    width: 50px;
    transform: rotate(20deg);
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
  a {
    color: ${theme.textDark1};
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.2rem;
  }
`;

export const NavbarLink = styled.a`
  padding: 0 1.2rem;
`;

export const BrandLogoStyled = styled.img`
  width: 30px;
  height: 30px;
`;

export const Search = styled.div`
  display: block;
  padding: 20px;
  min-width: 160px;
  font-family: "Amiri", serif;
  font-size: 1.2rem;
  font-style: italic;
`;
