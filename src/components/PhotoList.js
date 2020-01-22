import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoList() {

  const [Pic, setPic] = useState("");
  const [pTag, setPTag] = useState('Blood')
  
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setPic(res.data.results[19].image);
        setPTag(res.data.results[19].name)
      })
      .catch(err => {
        console.log('Error', err)
      })
      
  }, []);


  return (
    <div className="App">
      <img src={Pic} alt="a random pic" />
      <p>{pTag}</p>
    </div>
  );
}
export default PhotoList;