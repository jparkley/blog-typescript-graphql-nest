import { ButtonStyled } from "../Button/Button.styled";
import {
  BrandStyled,
  LinkStyled,
  NavbarMenuStyled,
  NavbarStyled,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <BrandStyled>
        {/* <img src="./logo.png" alt="Logo" /> */}
        <a href="/">ChamGo</a>
      </BrandStyled>
      <NavbarMenuStyled>
        <LinkStyled href="/">Home</LinkStyled>
        <LinkStyled href="/blogposts">Posts</LinkStyled>
        <LinkStyled href="/about">About</LinkStyled>
      </NavbarMenuStyled>
      <ButtonStyled color="primary">Log Out</ButtonStyled>
    </NavbarStyled>
  );
};

export default Navbar;
