import "./App.css";

import logo from "./logo.svg";
import { useState } from "react";

const dictionaryItems = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [definition, setDefinition] = useState("");
  const handleSearchClick = () => {
    let searchedItem =
      dictionaryItems &&
      dictionaryItems.length > 0 &&
      dictionaryItems.find(
        (ele) => ele.word?.toLocaleLowerCase() === searchValue?.toLowerCase()
      );
    if (searchedItem) {
      setDefinition(searchedItem.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };
  return (
    <div className="App">
      <h1>Dictionary App.</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => handleSearchClick()}>Search</button>
      </div>
      <h3>Definition:</h3> <p>{definition}</p>
    </div>
  );
}

export default App;
