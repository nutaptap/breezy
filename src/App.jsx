import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import Result from "./components/Result";
import NotFound from "./components/NotFound";
import React, { useContext, useEffect } from "react";
import DarkmodeContext from "./context/DarkmodeContext";
import { DarkmodeProvider } from "./context/DarkmodeContext";
import { SettingsProvider } from "./context/SettingsContext";

function DarkmodeClass() {
  const { darkmode } = useContext(DarkmodeContext);

  useEffect(() => {
    if (darkmode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [darkmode]);

  return null;
}

function App() {
  return (
    <DarkmodeProvider>
      <SettingsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path=":id" element={<Result />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <DarkmodeClass />
        </BrowserRouter>
      </SettingsProvider>
    </DarkmodeProvider>
  );
}

export default App;
