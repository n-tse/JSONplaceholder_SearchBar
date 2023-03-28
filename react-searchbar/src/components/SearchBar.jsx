import React, { useState, useEffect } from "react";
import "../css/SearchBar.css";

import { FaSearch, FaTimes } from "react-icons/fa";

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  filteredData,
  setFilteredData,
  setIsResultClicked,
  setClickedUser,
}) => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [resData, setResData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  console.log(resData);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
    filterData(target.value);
    !target.value && setIsResultClicked(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (filteredData.length === 1) {
        setClickedUser(filteredData[0]);
        setSearchTerm(filteredData[0].name);
        setIsResultClicked(true);
      }
    } else {
      setIsResultClicked(false);
    }
  };

  const filterData = (searchValue) => {
    const filtered = resData.filter((person) => {
      return (
        person.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.username.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setResData(data);
      });
    // setResData(res);
  };

  const clearInput = () => {
    setSearchTerm("");
    setIsResultClicked(false);
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <FaTimes
          id="x-icon"
          style={!searchTerm && { visibility: "hidden" }}
          onClick={clearInput}
        />
      </div>
      {/* <ul>
        {searchTerm &&
          filteredData.map((person, index) => {
            return (<><li key={index}><b>Name</b>: {person.name}</li>
              <ul>
                <b>Username:</b> {person.username}
              </ul>
            </>
          )})}
      </ul> */}
    </>
  );
};
