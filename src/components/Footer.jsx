import Logo from "../images/github.svg";
import DarkmodeContext from "../context/DarkmodeContext";
import React, { useContext } from "react";

const Footer = () => {
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <footer className={darkmode ? "darkmode" : ""}>
      <p>CODED BY NURIA</p>
      <a href="https://github.com/nutaptap" target="_blank">
        <img src={Logo} />
      </a>
    </footer>
  );
};

export default Footer;
