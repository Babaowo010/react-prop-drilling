import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the Home page</h1>
      <Link to={"/contacts"}>Go to Contact</Link> <br />
      <Link to={"/settings"}>Go to Settings</Link>
    </div>
  );
}

export default Home;
