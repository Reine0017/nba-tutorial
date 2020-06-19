import React, { useState, useEffect } from "react";
import axios from "axios";

import { URL_TEAMS } from "./paths";

function Poll() {
  const [pollTeams, setPollTeams] = useState([]);
  const [error, setError] = useState(false);

  const getPoll = () => {
    axios
      .get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
      .then((response) => {
        setPollTeams(response.data);
      });
  };

  const showPoll = () => {
    const position = ["1ST", "2ND", "3RD"];
    return pollTeams.map((item, index) => (
      <div key={index} className="poll_item">
        <>{console.log(item)}</>
        <>{console.log(item.logo)}</>
        <img alt={item.team} src={`/images/teams/${item.logo}`} />
        <h4>{position[index]}</h4>
        <div>{item.count} votes</div>
      </div>
    ));
  };

  useEffect(() => {
    getPoll();
  }, []);
  console.log(pollTeams);
  return (
    <>
      <div className="home_poll">
        <h3>Who will be the next champion?</h3>
        <>
          <div className="poll_container">{showPoll()}</div>
        </>
      </div>
    </>
  );
}

export default Poll;
