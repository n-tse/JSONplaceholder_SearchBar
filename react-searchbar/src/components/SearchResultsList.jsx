import React from "react";
import "../css/SearchResultsList.css";

export const SearchResultsList = ({ filteredData, isResultClicked, setIsResultClicked, setClickedUser }) => {
  const handleClick = (id) => {
    setIsResultClicked(isResultClicked => !isResultClicked);
    displayClickedUser(id);
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
              <ul className="result" onClick={() => handleClick(person.id)}>
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
