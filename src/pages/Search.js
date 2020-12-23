/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../utils/API";
//import EmployeeContext from "../utils/EmployeeContext";
import Col from "../components/Col";
import Hero from "../components/Hero";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

function Search() {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (employees.length === 0) {
      loadEmployees();
    } else if (employees.length !== 0) {
      filterEmployees();
    }
  }, [searchString, employees]);

  function loadEmployees() {
    console.log("loadEmployees()");
    API.getUsers()
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("Empty Set Returned");
        }
        const results = res.data.results;
        setEmployees(results);
      })
      .catch((err) => {
        throw err;
      });
  }

  function filterEmployees() {
    console.log("filter employees");
    console.log(searchString);
    if (searchString.length !== 0) {
      const re = `/${searchString}/i`;
      const newArray = filtered.filter((item) => {
        if (item.name.first.match(re) || item.name.last.match(re)) {
          return true;
        }
        return false;
      });
      setFiltered(newArray);
      console.log(newArray);
    } else {
      setFiltered(employees);
    }
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    //setSearchString(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    //setSearchString(value);
  };

  return (
    <div>
      <Hero>
        <h1 className="display-4">Employee Directory</h1>
      </Hero>
      <Col size="md-4">
        <SearchBar
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          onClick={handleFormSubmit}
          name="search"
          value={searchString}
        />
      </Col>
      <Table employeeList={filtered} />
    </div>
  );
}

export default Search;
