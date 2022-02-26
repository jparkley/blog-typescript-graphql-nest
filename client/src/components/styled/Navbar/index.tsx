import { ButtonDark } from "../Button/Button.styled";
import { ContainerFlexStyled } from "../Container/Container.styled";
import * as Styled from "./Navbar.styled";

const Navbar = () => {
  return (
    <Styled.Navbar>
      <Styled.Brand>
        {/* <img src="./logo.png" alt="Logo" /> */}
        <a href="/">ChamGo</a>
      </Styled.Brand>
      <ContainerFlexStyled justifyContent="space-between">
        <Styled.NavbarMenu>
          <Styled.NavbarLink href="/">Home</Styled.NavbarLink>
          <Styled.NavbarLink href="/blogposts">Posts</Styled.NavbarLink>
          <Styled.NavbarLink href="/about">About</Styled.NavbarLink>
        </Styled.NavbarMenu>
        <ContainerFlexStyled justifyContent="flex-end">
          <Styled.Search>Search here...</Styled.Search>
          <ButtonDark color="backgroundLight">Log Out</ButtonDark>
        </ContainerFlexStyled>
      </ContainerFlexStyled>
    </Styled.Navbar>
  );
};

export default Navbar;
