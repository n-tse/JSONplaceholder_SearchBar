import React from "react";
import "../css/SearchResultsList.css";

export const SearchResultsList = ({ filteredData, setIsResultClicked, setClickedUser, setSearchTerm }) => {
  const handleClick = (person) => {
    setIsResultClicked(prev => !prev);
    displayClickedUser(person.id);
    setSearchTerm(person.name);
  }

  const displayClickedUser = (id) => {
    const clickedUser = filteredData.filter((person) => {
      return person.id === id;
    })
    setClickedUser(clickedUser[0]);
  }

  return (
    <>
      <div className="resultsList">
        {filteredData.length !== 0 &&
          filteredData.map((person, index) => {
            return (
              <ul className="result" onClick={() => handleClick(person)}>
                <li key={index}>
                  <b>Name</b>: {person.name}
                </li>
                <li>
                  <b>Username:</b> {person.username}
                </li>
              </ul>
            );
          })}
      </div>
      {filteredData.length === 0 && <p>No matching results</p>}
    </>
  );
};
