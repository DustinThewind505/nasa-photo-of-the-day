import React from "react";
import PhotoList from "./components/PhotoList";
import styled from "styled-components";
import "./App.css";

const MainContainer = styled.div`

    background: blue;
`;

function App() {

  return (
    <MainContainer className="App">
      <input type='date'/>
      <h1>
        Nasa Photo of the Day
      </h1>
      <PhotoList />
    </MainContainer>
  );
}

export default App;
