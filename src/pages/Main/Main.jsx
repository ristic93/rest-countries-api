import React from "react";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Countries from "../Countries/Countries";
import "./main.scss";

const Main = () => {
  return (
    <main className="container">
      <div className="cta">
        <Search />
        <Filter />
      </div>
      <div>
        <Countries />
      </div>
    </main>
  );
};

export default Main;
