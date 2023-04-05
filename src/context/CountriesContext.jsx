import { createContext, useState, useEffect } from "react";
import { API_URL } from "../env/Api";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/all`);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CountriesContext.Provider
      value={{ countries, setCountries, isLoading, setIsLoading, fetchData }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
