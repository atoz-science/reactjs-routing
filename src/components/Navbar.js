import { NavLink } from "react-router-dom";
export const Navbar = () => {

  const navLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  return (
    <nav>
      <NavLink to="/" style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyle}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyle}>
        Products
      </NavLink>
    </nav>
  );
};
