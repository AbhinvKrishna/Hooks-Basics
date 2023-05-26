import React, { useReducer , createContext} from "react";
import ComponentA from "./componentA";



export const CountContext =createContext();


function UseReducerFour() {


  const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Inc":
      return state + 1;
    case "Dec":
      return state - 1;
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

const [count, dispatch] = useReducer(reducer, intialState);

const name = "KOO";

  return (
    <>
      <CountContext.Provider value={{ count, dispatch, intialState, name }}>
        <ComponentA/>
      </CountContext.Provider>
    </>
  );
}

export default UseReducerFour;
