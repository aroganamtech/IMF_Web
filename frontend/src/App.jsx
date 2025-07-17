import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutClimbing from "./pages/Home/AboutClimbing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/climbing-in-india" element={<AboutClimbing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
