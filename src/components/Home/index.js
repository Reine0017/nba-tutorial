import React, { useState } from "react";

import HomeSlider from "./slider";
import Subscriptions from "../utils/subscribe";
import HomeArticles from "./articles";

import Poll from "../utils/poll";

function Home() {
  return (
    <>
      <HomeSlider />
      <Subscriptions />
      <div className="container">
        <HomeArticles />
        <Poll />
      </div>
    </>
  );
}

export default Home;
