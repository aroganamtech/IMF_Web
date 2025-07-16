import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ExpetitionRule from "./pages/Home/Links/Expetitions/ExpetitionRule";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expetitionsrule" element={<ExpetitionRule />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
