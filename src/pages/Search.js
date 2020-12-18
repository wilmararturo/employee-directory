import React, { useState, useEffect } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import Hero from "../components/Hero";
import Table from "../components/Table";

function Search() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.getUsers()
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("Empty Set Returned");
        }
        setEmployeeState(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  });
  return (
    <div>
      <Hero>
        <h1 className="display-4">Employee Directory</h1>
      </Hero>
      <EmployeeContext.Provider value={employeeState}>
        <Table />
      </EmployeeContext.Provider>
    </div>
  );
}

export default Search;
