import "./App.css";
import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import SearchGifs from "./components/SearchGifs";

function App() {
  const [keyword, setKeyword] = useState();

  return (
    <div className="App">
      <section className="App-content">
        <SearchGifs setKeyword={setKeyword} />
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
