export function getMoviesList() {
  //GO to DB (server) and get data
  return {
    type: "MOVIES_LIST",
    payload: [
      { id: 12, name: "Pulp" },
      { id: 59, name: "Pacific" },
      { id: 199, name: "Ponyo" },
    ],
  };
}
