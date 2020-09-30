import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form">
        <input type="text" id="search-city" placeholder="Search city..." autoFocus="on"/>
        <input type="submit" value="Search" id="submit-search" />
      </form>
      <button>Get Current Location</button>
    </div>
  );
}
