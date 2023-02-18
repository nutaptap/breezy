import { createContext, useState } from "react";
const DarkmodeContext = createContext();

export const DarkmodeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  };

  return (
    <DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export default DarkmodeContext;
