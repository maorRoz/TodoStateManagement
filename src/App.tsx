import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPageLocalState } from "./IntegratedPages/MainPageLocalState";
import { MainPageMobx } from "./IntegratedPages/MainPageMobx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLocalState />} />
      <Route path="mobx" element={<MainPageMobx />} />
      <Route path="/recoil" element={<MainPageLocalState />} />
    </Routes>
  );
}

export default App;
