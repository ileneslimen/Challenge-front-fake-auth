import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList() {
  const users = useSelector((state) => state.UserReducer.users);

  const user = users.find((el) => el.auth == true);
  const movies = useSelector((state) => state.MovieReducer.movies);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {user ? (
        movies.map((el) => <MovieCard el={el} key={el.id}></MovieCard>)
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </div>
  );
}

export default MovieList;
