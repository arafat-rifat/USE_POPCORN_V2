import React, { useEffect, useRef, useState } from "react";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(
    function () {
      console.log(inputEl.current);
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") inputEl.current.focus();
        setQuery("");
      }

      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   console.log(el);
  //   el.focus();
  // });

  return (
    <input
      ref={inputEl}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
