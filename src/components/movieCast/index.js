import React from "react";

const MovieCast =  ({ movie }) => {
  return (
    <>
      <p>Actor: {movie.name} </p>
      <p>Character: {movie.charachter} </p>
    </>
  );
};
export default MovieCast