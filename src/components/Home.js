import React from "react";
import { name, city } from "../data/data.js";
function Home() {
  return (
    <div>
      <h1 id="home" style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
