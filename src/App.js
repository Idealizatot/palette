import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { EnergyBall } from "./components/EnergyBall/EnergyBall";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/palette" element={<EnergyBall />}></Route>
        <Route path="/" element={<Navigate to="/palette" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
