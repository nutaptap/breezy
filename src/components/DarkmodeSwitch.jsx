import React, { useContext } from "react";
import DarkmodeContext from "../context/DarkmodeContext";

const DarkmodeSwitch = () => {
  const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);

  return (
    <div>
      <input
        type="checkbox"
        id="darkmode"
        onChange={toggleDarkmode}
        defaultChecked={darkmode}
        className="offscreen"
      />
      <label for="darkmode" className="switch"></label>
    </div>
  );
};

export default DarkmodeSwitch;
