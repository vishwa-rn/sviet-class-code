import { useState } from "react";

function Counter() {
  console.log("Counter component");
  const [counter, setCounter] = useState(5);
  // setCounter(6);
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Click me!</button>
    </>
  );
}

export default Counter;
