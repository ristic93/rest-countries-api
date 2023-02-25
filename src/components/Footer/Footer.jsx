import React from "react";
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <p>&copy; Aleksandar Ristic {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
