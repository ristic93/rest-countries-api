import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import "./navbar.scss"

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/">
            <h1>Where in the world?</h1>
        </Link>
        <Toggle />
      </nav>
    </header>
  );
};

export default Navbar;
