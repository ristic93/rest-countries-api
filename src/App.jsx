import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SingleCountry from "./pages/SingleCountry/SingleCountry";
import { CountriesProvider } from "./context/CountriesContext";
import { ThemeContext } from "./context/ThemeContext";
import Main from "./pages/Main/Main";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "light" : "dark"} App`}>
      <CountriesProvider>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/:name" element={<SingleCountry />} />
        </Routes>

        <Footer />
      </CountriesProvider>
    </div>
  );
};

export default App;
