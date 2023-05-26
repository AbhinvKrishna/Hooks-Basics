import React, { useState, useEffect } from "react";

function UseEffectThree() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  const MouseMoveFunction = (e) => {
    setx(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    console.log("cancle");
    window.addEventListener("mousemove", MouseMoveFunction);
  }, []);

  return (
    <div>
      <div>
        x - {x}, y - {y}
      </div>
    </div>
  );
}

export default UseEffectThree;
