import React from "react";
// Styling

export default function SearchBar(props) {
  return (
    <input
      className="searchBar"
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
}
