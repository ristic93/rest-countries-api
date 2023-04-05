import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../../context/CountriesContext";
import "./countries.scss";

const Countries = () => {
  const { countries, isLoading } = useContext(CountriesContext);
  const noCountries = countries.status || countries.message;

  return (
    <>
      <div className="country-wrapper">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : !noCountries ? (
          countries.map(
            ({ numericCode, name, flags, population, region, capital }) => {
              return (
                <Link to={`/${name}`} key={numericCode}>
                  <div className="country-info">
                    <div className="image">
                      <img src={flags.png} alt={name} />
                    </div>
                    <div className="details">
                      <h3>{name}</h3>
                      <ul>
                        <li>
                          Population: <span>{population.toLocaleString()}</span>
                        </li>
                        <li>
                          Region: <span>{region}</span>
                        </li>
                        <li>
                          Capital: <span>{capital}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              );
            }
          )
        ) : (
          <h2>No countries found...</h2>
        )}
      </div>
    </>
  );
};

export default Countries;
