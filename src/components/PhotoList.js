import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoList() {

  const [Pic, setPic] = useState("");
  const [pTag, setPTag] = useState('Blood')
  const [title, setTitle] = useState('Title');
  const [date, setdate] = useState('date');
  const [copyright, setcopyright] = useState('copyright');

  
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setPic(res.data.url)
        setPTag(res.data.explanation)
        setTitle(res.data.title)
        setdate(res.data.date)
        setcopyright(res.data.copyright)
      })
      .catch(err => {
        console.log('Error', err)
      })
      
  }, []);


  return (
    <div className="App">
      <h2>{title}</h2>
      <img src={Pic} alt="a random pic" />
      <p>{pTag}</p>
      <p>{date}</p>
      <p>{copyright}</p>
    </div>
  );
}
export default PhotoList;