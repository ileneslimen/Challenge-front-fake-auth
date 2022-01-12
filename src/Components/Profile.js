import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function Profile() {
  const users = useSelector((state) => state.UserReducer.users);
  const user = users.find((el) => el.auth);
  const movies = useSelector((state) => state.MovieReducer.movies);
  return (
    <div>
      {user ? (
        <>
          {" "}
          <h1>hello {user.username} these are your watched list </h1>
          {movies
            .filter((el) => el.watched)
            .map((el) => (
              <MovieCard el={el} key={el.id}></MovieCard>
            ))}
        </>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </div>
  );
}

export default Profile;
