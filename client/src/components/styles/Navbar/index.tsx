import { ButtonStyled } from "../Button/Button.styled";
import { ContainerFlexStyled } from "../Container/Container.styled";
import {
  BrandStyled,
  LinkStyled,
  NavbarMenuStyled,
  NavbarStyled,
  SearchStyled,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <BrandStyled>
        {/* <img src="./logo.png" alt="Logo" /> */}
        <a href="/">ChamGo</a>
      </BrandStyled>
      <ContainerFlexStyled justifyContent="space-between">
        <NavbarMenuStyled>
          <LinkStyled href="/">Home</LinkStyled>
          <LinkStyled href="/blogposts">Posts</LinkStyled>
          <LinkStyled href="/about">About</LinkStyled>
        </NavbarMenuStyled>
        <ContainerFlexStyled justifyContent="flex-end">
          <SearchStyled>Search here...</SearchStyled>
          <ButtonStyled color="backgroundLight">Log Out</ButtonStyled>
        </ContainerFlexStyled>
      </ContainerFlexStyled>
    </NavbarStyled>
  );
};

export default Navbar;
