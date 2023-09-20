import React from "react";
import "../pages/Count/count.css";
function Two({ Onecount, OnesetCount }) {
  function subtract() {
    OnesetCount((prev) => prev - 2);
    if (Onecount < -19) {
      OnesetCount(Onecount + 0);
    }
  }
  function plus() {
    OnesetCount((prev) => prev + 2);
    if (Onecount > 19) {
      OnesetCount(Onecount + 0);
    }
  }
  return (
    <div>
      <h1>Two Component</h1>
      <div class="count-con">
        <button onClick={subtract}>Minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>
      </div>
    </div>
  );
}

export default Two;
