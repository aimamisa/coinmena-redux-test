import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Retun to Products
      </NavLink>
    </nav>
  );
};

export default Header;
