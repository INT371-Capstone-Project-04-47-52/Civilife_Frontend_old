import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sceneGame/Home";
import LoginGame from "./sceneGame/LoginGame";
import CustomCharacters from "./sceneGame/CustomCharacter";
import Bank from "./assetGame/HomePage/Bank.jpg";
import Market from "./assetGame/HomePage/Market.jpg";
import Happy from "./assetGame/HomePage/Happy.jpg";
import Travel from "./assetGame/HomePage/Travel.png";
import Restuarant from "./assetGame/HomePage/Restuarant.png";
import Hospital from "./assetGame/HomePage/Hospital.jpg";
import Result from "./assetGame/HomePage/Result.jpg";
function App (){
  
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginGame />} />
            <Route path="/ChooseCharacter" element={<CustomCharacters />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Bank" element={<Bank />} />
            <Route path="/Happy" element={<Happy />} />
            <Route path="/Hospital" element={<Hospital />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Result" element={<Result />} />
            <Route path="/Travel" element={<Travel />} />
            <Route path="/Restaurant" element={<Restuarant />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
