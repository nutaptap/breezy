import { Link } from "react-router-dom";
import DarkmodeSwitch from "./DarkmodeSwitch";
import Logo from "../images/breezy.png";
import DarkmodeContext from "../context/DarkmodeContext";
import React, { useContext } from "react";

const NavBar = () => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <nav className={darkmode ? "darkmode" : ""}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p>Breezy</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/settings">SETTINGS</Link>
          </li>
        </ul>
        <DarkmodeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
