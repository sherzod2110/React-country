import { useEffect, useState, useRef } from "react";
import Header from "./companents/Header/Header";
import Card from "./companents/Card/Card";
import Search from "./companents/Search/Search";
import SingleCountry from "./companents/Pages/SingleCountry";
import Error from "./companents/Error/Error";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  //Night mode
  const [dark, setDark] = useState(false);

  const [data, setData] = useState([]);

  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    if (value) {
      fetch(`https://restcountries.com/v2/name/${value}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => <Navigate to="/error" replace={true} />);
    } else if (select.length && select !== "All") {
      fetch(`https://restcountries.com/v2/region/${select}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => <Navigate to="/error" replace={true} />);
    } else {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => <Navigate to="/error" replace={true} />);
    }
  }, [value, select]);

  return (
    <>
      <div className="App">
        <Header dark={dark} setDark={setDark} />
        <Search
          dark={dark}
          setValue={setValue}
          value={value}
          setSelect={setSelect}
        />
        <Routes>
          <Route
            dark={dark}
            path="/"
            element={<Card data={data} dark={dark} />}
          />
          <Route
            dark={dark}
            path="/countries/:name"
            element={<SingleCountry dark={dark} />}
          />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
