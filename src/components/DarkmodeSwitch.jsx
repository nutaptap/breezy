import React, { useContext } from "react";
import DarkmodeContext from "../context/DarkmodeContext";

const DarkmodeSwitch = () => {
  const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);

  return (
    <input
      type="checkbox"
      id="darkmode"
      onChange={toggleDarkmode}
      defaultChecked
    />
  );
};

export default DarkmodeSwitch;
