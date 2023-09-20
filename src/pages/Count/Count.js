import React, { useState } from "react";
import "./count.css";
import One from "../../component/One";
import Two from "../../component/Two";
import Three from "../../component/Three";
import Four from "../../component/Four";

function Count() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => prev + 5);
    if (count > 45) {
      setCount(count + 0);
    }
  };

  const minus = () => {
    setCount((prev) => prev - 5);
    if (count < -45) {
      setCount(count + 0);
    }
  };

  return (
    <div>
      <h1>Count Page</h1>
      <div class="count-con">
        <button onClick={minus}>Minus</button>
        <p>{count}</p>
        <button onClick={add}>Add</button>
      </div>
      <One Onecount={count} OnesetCount={setCount} />
      <Two Onecount={count} OnesetCount={setCount} />
      <Three Onecount={count} OnesetCount={setCount} />
      <Four Onecount={count} OnesetCount={setCount} />
    </div>
  );
}

export default Count;
