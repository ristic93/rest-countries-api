import React, { useContext, useRef } from "react";
import "./filter.scss";
import { API_URL } from "../../env/Api";
import CountriesContext from "../../context/CountriesContext";

const Filter = () => {
  const regionRef = useRef();
  const { setCountries, fetchData } = useContext(CountriesContext);

  const selectRegion = () => {
    const selectValue = regionRef.current.value;

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const res = await fetch(`${API_URL}/region/${selectValue}`);
        const data = await res.json();

        if (selectValue === "All") {
          try {
            fetchData();
          } catch (err) {
            console.log(err);
          }
          return;
        }

        setCountries(data);
      };

      try {
        fetchSelect();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <select ref={regionRef} onChange={selectRegion}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
