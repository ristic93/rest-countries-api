import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import "./navbar.scss"

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
            <h1>Where in the world?</h1>
        </Link>
        <Toggle />
      </nav>
    </>
  );
};

export default Navbar;
