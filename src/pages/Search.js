/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../utils/API";
//import EmployeeContext from "../utils/EmployeeContext";
import Col from "../components/Col";
import Hero from "../components/Hero";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

//create three states: employee, filtered, searchString

//hansle input change
//update seachString
//filter to filtered

function Search() {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchString, setSearchString] = useState([]);

  useEffect(() => {
    if (employees.length === 0) {
      loadEmployees();
    } else if (employees.length !== 0) {
      filterEmployees();
    }
  }, [employees, filtered, searchString]);

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
    setFiltered(employees);
  }

  return (
    <div>
      <Hero>
        <h1 className="display-4">Employee Directory</h1>
      </Hero>
      <Col size="md-4">
        <SearchBar />
      </Col>
      <Table employeeList={filtered} />
    </div>
  );
}

export default Search;
