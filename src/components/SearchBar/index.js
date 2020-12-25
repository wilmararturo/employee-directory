import React from "react";

function SearchBar({ handleInputChange, name, value }) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={value}
          onChange={handleInputChange}
          name={name}
          type="text"
          className="form-control"
          placeholder="Type here to search by name"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchBar;
