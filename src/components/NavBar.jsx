import { Link } from "react-router-dom";
import DarkmodeSwitch from "./DarkmodeSwitch";
import Logo from "../images/breezy.png";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p>BREEZY</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <DarkmodeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
