import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from "../../actions";

function Movies() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMoviesList());
  // }, [dispatch]);

  const movies = useSelector((state) => state.movies);

  console.log(movies);
  return (
    <>
      <button onClick={() => dispatch(getMoviesList())}>Click Me</button>
      {movies ? (
        <>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </>
      ) : (
        <div>click to fetch data</div>
      )}
    </>
  );
}

export default Movies;
