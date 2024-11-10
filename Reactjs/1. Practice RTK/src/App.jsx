import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./app/features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.vaibhav.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="border border-black px-2 py-1 mr-3 mt-5"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border border-black px-2 py-1 "
      >
        Decrement
      </button>
    </>
  );
};

export default App;
