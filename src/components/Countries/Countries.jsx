import React, { useContext } from "react";
import CountriesContext from "../../context/CountriesContext";
import "./countries.scss";

const Countries = () => {
  const { countries, isLoading } = useContext(CountriesContext);

  return (
    <>
      <div className="country-wrapper container">
        {isLoading ? (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          countries.map(
            ({ numericCode, name, flags, population, region, capital }) => {
              return (
                <div key={numericCode} className="country-info">
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
              );
            }
          )
        )}
      </div>
    </>
  );
};

export default Countries;
