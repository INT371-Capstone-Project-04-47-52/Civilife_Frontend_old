import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginGame from "./sceneGame/LoginGame";
import CustomCharacters from "./sceneGame/CustomCharacter"
import Home from "./sceneGame/Home";

function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginGame/>}/>
      <Route path="/ChooseCharacter" element={<CustomCharacters/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
      </div>

  );
}

export default App;
