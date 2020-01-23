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
      <p>
        Nasa Photo of the Day
      </p>
      <PhotoList />
    </MainContainer>
  );
}

export default App;
