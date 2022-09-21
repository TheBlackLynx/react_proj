import React, { useState } from "react";
import  classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addValue = ():void => {
    setCount(count + 1);
  }

  const removeValue = ():void => {
    setCount(count - 1);
  }
  return (
    <>
      <div className={classes.counter}>{count}</div>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  );
};

export default Counter;
