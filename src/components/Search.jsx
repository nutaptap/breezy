import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    navigate(`/${search}`);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Barcelona"
        value={search}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
