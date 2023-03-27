import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { SearchResultsList } from "./components/SearchResultsList";
import { PersonDetails } from "./components/PersonDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isResultClicked, setIsResultClicked] = useState(false);
  const [clickedUser, setClickedUser] = useState({});

  return (
    <div className="App">
      <div id="header">
        <h1>JSON Placeholder</h1>
        <h3>User Search</h3>
      </div>
      <div className="search-bar-container">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setFilteredData={setFilteredData}
          setIsResultClicked={setIsResultClicked}
        />
        {searchTerm && !isResultClicked && (
          <SearchResultsList
            filteredData={filteredData}
            isResultClicked={isResultClicked}
            setIsResultClicked={setIsResultClicked}
            setClickedUser={setClickedUser}
            setSearchTerm={setSearchTerm}
          />
        )}
        {isResultClicked && searchTerm && (
          <PersonDetails clickedUser={clickedUser} />
        )}
      </div>
    </div>
  );
}

export default App;
