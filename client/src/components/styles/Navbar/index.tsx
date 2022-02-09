import { NavLink } from "react-router-dom";
import { BrandStyled } from "./Brand.styled";
import { NavbarStyled } from "./Navbar.styled";
const Navbar = () => {
  return (
    <NavbarStyled>
      <BrandStyled>
        {/* <img src="./logo.png" alt="Logo" /> */}
        <h2>ChamGo Blog</h2>
      </BrandStyled>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blogposts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
