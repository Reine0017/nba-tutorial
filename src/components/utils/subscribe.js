import React, { useState } from "react";
import axios from "axios";
import { URL_SUBS } from "./paths";

function Subscriptions() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyIn, setAlreadyIn] = useState(false);

  const onChangeInput = (event) => (
    setEmail(event.target.value), console.log(email)
  );

  const saveSubscription = (email) => {
    axios.get(`${URL_SUBS}?email=${email}`).then((response) => {
      //console.log(response.data);
      if (!response.data.length) {
      } else {
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //let email = email;
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      saveSubscription(email);
    } else {
      setError({ error: true });
    }
  };
  return (
    <div className="subscribe_panel">
      <h3>Subscribe to us</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            placeholder="yourEmail@gmail.com"
            onChange={onChangeInput}
          ></input>
        </form>
      </div>
      <small>Description here</small>
    </div>
  );
}

export default Subscriptions;
