import React from "react";

function SearchBar({ handleInputChange, handleFormSubmit, name, value }) {
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
          placeholder="Type in a search term to begin"
          id="term"
        />
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg float-right"
        ></button>
      </div>
    </form>
  );
}

export default SearchBar;
