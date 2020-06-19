import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";

import { URL_TEAMS } from "./paths";

function Poll() {
  const [pollTeams, setPollTeams] = useState([]);
  const [error, setError] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  const getPoll = () => {
    axios
      .get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
      .then((response) => {
        setPollTeams(response.data);
      });
  };

  const addCount = (count, id) => {
    let getCookie = cookie.load("poll");
    console.log(getCookie);
    console.log(clickCount);

    if (getCookie === undefined || getCookie < 3) {
      axios(`${URL_TEAMS}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        data: JSON.stringify({ count: count + 1 }),
      }).then((response) => {
        cookie.save("poll", clickCount);
        setClickCount(clickCount + 1);
        getPoll();
      });
    } else {
      setError(true);
    }
  };

  const showPoll = () => {
    const position = ["1ST", "2ND", "3RD"];
    return pollTeams.map((item, index) => (
      <div
        key={index}
        className="poll_item"
        onClick={() => addCount(item.count, item.id)}
      >
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
    //cookie.remove("poll");
  }, []);
  console.log(pollTeams);
  return (
    <>
      <div className="home_poll">
        <h3>Who will be the next champion?</h3>
        <>
          <div className="poll_container">{showPoll()}</div>
          {error ? (
            <div>Sorry, you cannot cast more than three votes</div>
          ) : null}
        </>
      </div>
    </>
  );
}

export default Poll;
