import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../env/Api";
import CountriesContext from "../../context/CountriesContext";
import "./singleCountry.scss";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { isLoading, setIsLoading } = useContext(CountriesContext);
  const { name } = useParams();

  useEffect(() => {
    window.scroll(0, 0)
    const fetchCountryData = async (name) => {
      try {
        const response = await fetch(`${API_URL}/name/${name}`);
        const data = await response.json();
        setCountry(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountryData(name);
  }, [name]);

  return (
    <main>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <section className="container">
          <Link to="/" className="back-link">
            <span>&larr;</span> Back
          </Link>
          {country.map((item) => {
            return (
              <article key={item.numericCode} className="country-wrapper">
                <div className="country-image">
                  <img src={item.flag} alt="" />
                </div>
                <div className="country-info">
                  <h2>{item.name}</h2>

                  <div className="info-block">
                    <ul className="info-block-one">
                      <li>
                        <span>Native Name:</span> {item.nativeName}
                      </li>
                      <li>
                        <span>Population:</span>{" "}
                        {item.population.toLocaleString()}
                      </li>
                      <li>
                        <span>Region:</span> {item.region}
                      </li>
                      <li>
                        <span>Sub Region:</span> {item.subregion}
                      </li>
                      <li>
                        <span>Capital:</span> {item.capital}
                      </li>
                    </ul>
                    <ul className="info-block-two">
                      <li>
                        <span>Top Level Domain:</span> {item.topLevelDomain}
                      </li>
                      <li>
                        <span>Currencies:</span> {item.currencies[0].name}
                      </li>
                      <li>
                        <span>Languages:</span> {item.languages[0].name}
                      </li>
                    </ul>
                  </div>

                  <div className="country-borders">
                    <p>Border Countries: </p>
                    {item.borders?.length ? (
                      item.borders.map((country, index) => (
                        <Link key={index} to={`/${name}`}>
                          {country} 
                        </Link>
                      ))
                    ) : (
                      <p>&nbsp;&nbsp; No borders...</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default SingleCountry;
