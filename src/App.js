import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0); // default count value #1 runs first
  const prevCounterRef = useRef(); // default value is undefined #2 runs second
  const headerRef = useRef(); // userRef are used to access DOM elements in class components, current: undefined,
  console.log(prevCounterRef);

  useEffect(() => {
    // this is NOT #3 to run, this is #4 to run after the component is rendering on the page
    prevCounterRef.current = counter; // counter is zero cos that's what was set in useState
  }, [counter]);

  return (
    // the return is the the #3 thing to run
    <div className="App">
      <h1 ref={headerRef}>Count: {counter}</h1>
      {typeof prevCounterRef.current !== "undefined" && (
        <h2> Previous: {prevCounterRef.current}</h2>
      )}
      <button
        className="superbig"
        onClick={() => {
          headerRef.current.style.backgroundColor = "red";
          setCounter(Math.ceil(Math.random() * 10)); // this is #5 to run after useEffect
        }} // the value in #5 gets stored in react's magic store and updates counter and then we got back to #1 with counter = 1
      >
        Click Me
      </button>
    </div>
  );
}
