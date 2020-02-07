import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const HeaderTwo = styled.h3`

  background-color: yellow;
`;

function PhotoList() {
  
  const [photoData, setPhotoData] = useState([])

  
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res);
       setPhotoData(res.data);
       
      })
      .catch(err => {
        console.log('Error', err)
      })
      
  }, []);

  return (
    <div className="App">
      <HeaderTwo>{photoData.title}</HeaderTwo>
      <img src={photoData.url} alt="a random pic" />
      <p>{photoData.explanation}</p>
      <p>{photoData.date}</p>
      <p>{photoData.copyright}</p>
    </div>
  );
}
export default PhotoList;