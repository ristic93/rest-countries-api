import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries/Countries";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SingleCountry from "./pages/SingleCountry/SingleCountry";
import { CountriesProvider } from "./context/CountriesContext";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "light" : "dark"} App`}>
      <CountriesProvider>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Countries />} />
          <Route path="/:name" element={<SingleCountry />} />
        </Routes>

        <Footer />
      </CountriesProvider>
    </div>
  );
};

export default App;
