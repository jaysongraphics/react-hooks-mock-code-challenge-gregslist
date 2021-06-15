import React from "react";
import Search from "./Search";

function Header({search, setSearch, sortItems}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        setSearch={setSearch}
        search={search}
      />
      <button onClick={sortItems}> Sort by location</button>
    </header>
  );
}

export default Header;
