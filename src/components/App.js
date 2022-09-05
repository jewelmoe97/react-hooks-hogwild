import React, { useState } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import HogContainer from "./HogContainer";

import hogs from "../porkers_data";

function App() {
  const [filterPigs, setFilter] = useState("all")
  const [sortPigs, setSort] = useState("none")

  function updateFilter(e) {
    setFilter(e.target.value)
  }



  function filteredPigs() {
    if (filterPigs === "all") {
      return hogs
    } else if (filterPigs === "greased") {
      return hogs.filter((hog) => hog.greased)
    } else {
      return hogs.filter((hog) => !hog.greased)
    }
  }

  function updateSort(e) {
    setSort(e.target.value)
  }

  function sortedPigs() {
    let piggies = filteredPigs();
    if (sortPigs === "none") {
      return piggies
  }
  let pigsArray= [...piggies];
  if (sortPigs === "name") {
    return pigsArray.sort((a,b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : 1
    })
  } else if (sortPigs === "weight") {
    return pigsArray.sort((a, b) => {
      return a.weight - b.weight
    })
  }
}

return (
    <div className="App">
      <Nav />
      <SearchBar 
        updateFilter={updateFilter}
        updateSort={updateSort}
        />
      <HogContainer 
        hogs={sortedPigs()} 
      />
    </div>
  );
}

export default App;
