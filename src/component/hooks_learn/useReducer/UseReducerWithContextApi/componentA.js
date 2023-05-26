import React, { useContext } from "react";

import { CountContext } from "./UseReducerFour";

function ComponentA() {
  const {count, intialState, dispatch, name} = useContext(CountContext);

  return (
    <>
      <div>{intialState}</div>
      <div>{count}</div>
      <h2>{name}</h2>
      <button onClick={() => dispatch("Inc")}>Inc</button>
      <button onClick={() => dispatch("Dec")}>Dec</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </>
  );
}

export default ComponentA;