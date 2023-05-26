import React, { useState, useEffect } from "react";

const UseEffectFour = () => {
  const [count, setcount] = useState(0);

  const timer = () => {
    setcount((prveCount) => prveCount + 1);
  };

  useEffect(() => {

    // Count ki value chhoti hai 5 se to rok do value ko 5 ke baad //

    if(count < 5){
    const intervale = setInterval(timer, 1000);
    return () => {
        clearInterval(intervale);

    };
  }
  }, [count]);

  return (
    <>
      <p>{count}</p>
    </>
  );
};

export default UseEffectFour;
