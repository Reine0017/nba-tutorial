import React from "react";

import HomeSlider from "./slider";
import Subscriptions from "../utils/subscribe";
import HomeArticles from "./articles";

function Home() {
  return (
    <>
      <HomeSlider />
      <Subscriptions />
      <div className="container">
        <HomeArticles />
      </div>
    </>
  );
}

export default Home;
