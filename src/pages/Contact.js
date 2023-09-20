import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div>
      <h1>This is the contact page</h1>
      <Link to={"/"}>Go Back Home</Link>
    </div>
  );
}

export default Contacts;
