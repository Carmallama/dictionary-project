import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //

  return (
    <div className="Dictionary">
      <section>
        <form className="text-center" onSubmit={search}>
          <h1 className="text-center">Search a word!</h1>
          <input
            className="searchBar"
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search a word..."
          />
          <input className="search-btn" type="submit" value="Search" />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
