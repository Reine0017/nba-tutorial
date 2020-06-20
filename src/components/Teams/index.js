import React, { useState, useEffect } from "react";
import axios from "axios";

import { URL_TEAMS } from "../utils/paths";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import MyModal from "./modal";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [team, setTeam] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get(URL_TEAMS).then((response) => {
      setTeams(response.data);
      setFiltered(response.data);
    });
  }, []);

  //console.log(teams);

  const clearModal = () => {
    setTeam(null);
  };

  const showModalTeam = (data) => {
    setTeam(data);
  };

  const renderList = (filtered) =>
    filtered.map((item, index) => (
      <CSSTransition key={index} timeout={500} className="fade">
        <div className="team_item" onClick={() => showModalTeam(item)}>
          <img
            alt={item.name}
            width="150px"
            src={`/images/teams/${item.logo}`}
          ></img>
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
      setKeyword(keyword);
    } else {
      setFiltered(teams);
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
      <MyModal team={team} clearModal={() => clearModal()} />
    </div>
  );
}

export default Teams;
