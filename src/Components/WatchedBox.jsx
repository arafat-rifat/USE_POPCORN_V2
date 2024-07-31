import React, { useState } from "react";
import WatchedSummery from "./WatchedSummery";
import WatchedMovieList from "./WatchedMovieList";

const WatchedBox = ({ watched, setWatched }) => {
  return (
    <>
      <WatchedSummery watched={watched} />

      <WatchedMovieList watched={watched} />
    </>
  );
};

export default WatchedBox;
