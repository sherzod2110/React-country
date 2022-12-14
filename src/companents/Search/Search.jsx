import React, { useState } from "react";
import "./Search.css";
import search from "../../assets/search.svg";

function Search({ setValue, setSelect, dark }) {
  // const [click,setclick]=useState("")
  function onclick(evt) {
    if (evt.key == "Enter") {
      return setValue(evt.target.value);
    }
  }
  return (
    <>
      <div className={`${dark ? "" : "wwww"}`}>
        <div className="container">
          <div className="d-flex justify-content-between p-4 search-box">
            <div className="position-relative">
              <img className="search-img" src={search} alt="" />
              <input
                //   onChange={(evt) => {setclick(evt.target.value)}}
                onKeyPress={onclick}
                className="input"
                type="search"
                placeholder="Search for a country…"
              />
            </div>
            <div>
              <select
                onChange={(evt) => setSelect(evt.target.value)}
                className="select px-2"
              >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
