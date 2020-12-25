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
    console.log("Using Effect...");
    if (employees.length === 0) {
      loadEmployees();
    } else if (employees.length !== 0) {
      console.log(filtered);
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
    console.log(searchString, searchString.length);
    if (searchString.length !== 0) {
      const re = searchString.toLowerCase();
      console.log(re);
      const newArray = employees.filter((item) => {
        const fullName = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
        if (fullName.match(re)) {
          console.log(item.name.first);
          return true;
        }
        return false;
      });
      setFiltered(newArray);
      console.log(filtered);
    } else {
      setFiltered(employees);
    }
  }

  function sortEmployees() {
    console.log(filtered);
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    setSearchString(value);
  };

  const handleTableHeaderClick = (event) => {
    console.log("table header click", event.target);
    filtered.sort((a, b) => {
      const aName = `${a.name.first.toLowerCase()} ${a.name.last.toLowerCase()}`;
      const bName = `${b.name.first.toLowerCase()} ${b.name.last.toLowerCase()}`;
      if (aName < bName) {
        return -1;
      }
      if (aName < bName) {
        return 1;
      }
      return 0;
    });
  };

  return (
    <div>
      <Hero>
        <h1 className="display-4">Employee Directory</h1>
      </Hero>
      <Col size="md-4">
        <SearchBar
          handleInputChange={handleInputChange}
          name="search"
          value={searchString}
        />
      </Col>
      <Table employeeList={filtered} onClick={handleTableHeaderClick} />
    </div>
  );
}

export default Search;
