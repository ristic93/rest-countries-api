import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../env/Api";
import CountriesContext from "../../context/CountriesContext";
import { BsArrowLeft } from "react-icons/bs";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const { name } = useParams();

  const { isLoading, setIsLoading } = useContext(CountriesContext);

  useEffect(() => {
    const fetchCountryData = async (name) => {
      try {
        const response = await fetch(`${API_URL}/name/${name}`);
        const data = response.json();
        setCountry(data[0]);
        data[0].borders?.forEach((border) => {
          return findCountryData(border);
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountryData(name);

    const findCountryData = async (border) => {
      try {
        const response = await fetch(`${API_URL}/alpha/${border}`);
        const data = response.json();
        setBorderCountries((cur) => [...cur, data.name]);
      } catch (err) {
        console.log(err);
      }
    };
  }, [name]);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Link to="/" className="back-link">
          <BsArrowLeft /> Back
        </Link>
      )}
    </div>
  );
};

export default SingleCountry;
