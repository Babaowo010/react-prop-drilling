import React from "react";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <h1>This is the settings page</h1>
      <Link to={"/"}>Go Back Home</Link>
    </div>
  );
}

export default Settings;
