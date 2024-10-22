import React, { useState } from "react";
import WatchedSummery from "./WatchedSummery";
import WatchedMovieList from "./WatchedMovieList";

const WatchedBox = ({ watched, setWatched, handleDeleteWatched }) => {
  return (
    <>
      <WatchedSummery watched={watched} />

      <WatchedMovieList
        watched={watched}
        handleDeleteWatched={handleDeleteWatched}
      />
    </>
  );
};

export default WatchedBox;
