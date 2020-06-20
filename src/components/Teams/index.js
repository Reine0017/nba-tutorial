import React, { useState, useEffect } from "react";
import axios from "axios";

import { URL_TEAMS } from "../utils/paths";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get(URL_TEAMS).then((response) => {
      setTeams(response.data);
      setFiltered(response.data);
    });
  }, []);

  //console.log(teams);

  const renderList = (filtered) =>
    filtered.map((item, index) => (
      <CSSTransition key={index} timeout={500} className="fade">
        <div className="team_item">
          <img alt={item.name} src={`/images/teams/${item.logo}`}></img>
          <>{console.log(item.logo)}</>
        </div>
      </CSSTransition>
    ));

  const searchKeyword = (event) => {
    const keyword = event.target.value;
    if (keyword !== "") {
      const list = teams.filter((item) => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });
      setFiltered(list);
      console.log(list);
      setKeyword(keyword);
      console.log(keyword);
    } else {
      setFiltered(teams);
      console.log(teams);
      setKeyword(keyword);
    }
  };

  return (
    <div className="teams_component">
      <div className="teams_input">
        <input
          type="text"
          value={keyword}
          onChange={(e) => searchKeyword(e)}
          placeholder="Search for a team"
        ></input>
      </div>
      <div className="container teams_container">
        <TransitionGroup component="span">
          {renderList(filtered)}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Teams;
