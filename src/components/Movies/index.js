import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from "../../actions";

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies);

  return (
    <>
      {movies ? (
        <>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </>
      ) : (
        "loading"
      )}
    </>
  );
}

export default Movies;
