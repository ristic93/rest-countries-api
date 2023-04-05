import React, { useContext, useRef } from "react";
import "./search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { API_URL } from "../../env/Api";
import CountriesContext from "../../context/CountriesContext";

const Search = () => {
  const countriesInputRef = useRef();

  const { setCountries, fetchData } = useContext(CountriesContext);

  const handleInput = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const res = await fetch(`${API_URL}/name/${searchValue}`);
        const data = await res.json();

        setCountries(data);
      };

      try {
        fetchSearch();
      } catch (err) {
        console.log(err);
      }
    } else {
      fetchData();
    }
  };
  return (
    <div className="input">
      <AiOutlineSearch className="icon"/>
      <input
        type="text"
        placeholder="Search for a country..."
        ref={countriesInputRef}
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
