import React from "react";
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const apply = (action) => {
    if (action === "reset") {
      setCounter(0);
    } else {
      setCounter(action === "increment" ? counter + 1 : counter - 1);
    }
  };

  return (
    <div className="flex center counter">
      <button className="rounded" onClick={() => apply("decrement")}>
        -
      </button>
      <p>{counter}</p>
      <button className="rounded" onClick={() => apply("increment")}>
        +
      </button>

      <button className="rounded" onClick={() => apply("reset")}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
