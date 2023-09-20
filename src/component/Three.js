import React from "react";
import "../pages/Count/count.css";
function Three({ Onecount, OnesetCount }) {
  function subtract() {
    OnesetCount((prev) => prev - 3);
    if (Onecount < -29) {
      OnesetCount(Onecount + 0);
    }
  }
  function plus() {
    OnesetCount((prev) => prev + 3);
    if (Onecount > 29) {
      OnesetCount(Onecount + 0);
    }
  }
  return (
    <div>
      <h1>Three Component</h1>
      <div class="count-con">
        <button onClick={subtract}>Minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>
      </div>
    </div>
  );
}

export default Three;
