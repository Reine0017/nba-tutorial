import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from "../../actions";

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies);

  console.log(movies);
  return <>{movies ? "loaded" : "loading"}</>;
}

export default Movies;
