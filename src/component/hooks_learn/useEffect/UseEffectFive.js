import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectFive() {
  const [Data, setData] = useState([]);
  const [id, Setid] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.results);  // here *res.data.(name of fetching API array) is method to fetch data in axios //
      })
      .catch((err) => console.log(err))
      .finally(console.log("complete"));
  }, [id]);

  return (
    <div>
      <button type="button" onClick={() => Setid(id + 1)}>
        click{id}
      </button>
      {Data.map((el) => (
        <p key={el.title}>
          <img src={el.backdrop_path} alt="" />
          <br /><b>TITLE: {el.title}</b> 
           <br />Language: {el.original_language} 
           <br /> overview: {el.overview}</p>
      ))}
    </div>
  );
}

export default UseEffectFive;
