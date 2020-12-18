import React from "react";
//import API from "../utils/API";
import Hero from "../components/Hero";
import Table from "../components/Table";

function Search() {
  return (
    <div>
      <Hero>
        <h1 className="display-4">Employee Directory</h1>
      </Hero>

      <Table />
    </div>
  );
}

export default Search;
