import React, { useState } from "react";

const UseStateArray = () => {


  const randomName = Math.random().toString(36).substring(2,7)


  const [Item, setItem] = useState([
    {
      name1: "First",
      score:""
    },
    {
      name: "second",
      score:""
    },
  ]);

  const AddItemHandler = () => {
    setItem([...Item, { name: randomName , score: `${Math.trunc(Math.random() * 6) + 1}` }]);
  };


  return (
    <>
      <div>
        <button onClick={AddItemHandler}>add</button>
        <ul>
          {Item.map((el) => (
            <li key={el.name}>Name:{el.name} <br /> Score:{el.score} </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseStateArray;
