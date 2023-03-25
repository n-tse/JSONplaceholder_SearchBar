import React from "react";
import "../css/PersonDetails.css";

export const PersonDetails = ({ clickedUser }) => {
  // console.log("clickedUser", clickedUser);
  return (
    <div className="person-details-container">
      <h1>User Details</h1>
      <ul>
        {Object.keys(clickedUser).map((field) => {
          if (typeof clickedUser[field] === "object") {
            return (
              <>
                <li key={field}>
                  <b>{field}:</b>
                  <ul>
                    {Object.keys(clickedUser[field]).map((innerField) => {
                      return (
                        typeof clickedUser[field][innerField] !== "object" && (
                          <li key={innerField}>
                            {innerField}: {clickedUser[field][innerField]}
                          </li>
                        )
                      );
                    })}
                  </ul>
                </li>
              </>
            );
          } else {
            return (
              field !== "id" && (
                <li key={field}>
                  <b>{field}:</b> {clickedUser[field]}
                </li>
              )
            );
          }
        })}
      </ul>
    </div>
  );
};
