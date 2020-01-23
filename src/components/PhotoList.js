import React, { useState, useEffect } from "react";
import axios from "axios";



function PhotoList(props) {
  
  const [photoData, setPhotoData] = useState([])
  // const [Pic, setPic] = useState("");
  // const [pTag, setPTag] = useState("Blood")
  // const [title, setTitle] = useState("Title");
  // const [date, setdate] = useState("data");
  // const [copyright, setcopyright] = useState("copyright");

  
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        // setPic(res.data.url)
        // setPTag(res.data.explanation)
        // setTitle(res.data.title)
        // setdate(res.data.date)
        // setcopyright(res.data.copyright)
       setPhotoData(res.data);
      })
      .catch(err => {
        console.log('Error', err)
      })
      
  }, []);


  return (
    <div className="App">
      <h2>{photoData.title}</h2>
      <img src={photoData.url} alt="a random pic" />
      <p>{photoData.explanation}</p>
      <p>{photoData.date}</p>
      <p>{photoData.copyright}</p>
    </div>
  );
}
export default PhotoList;