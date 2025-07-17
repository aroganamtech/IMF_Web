import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutSportsClimbing from "./pages/Home/SportsClimbing/AboutSportsClimbing";
import Competitions from "./pages/Home/SportsClimbing/Competitions";
import ClimbingWalls from "./pages/Home/SportsClimbing/ClimbingWalls";
import AffiliatedClubs  from "./pages/Home/AffiliatedClubs/AffiliatedClubs";
import ClubRegistration from "./pages/Home/AffiliatedClubs/ClubRegistration";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sportclimbing" element={<AboutSportsClimbing />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/climbingwalls" element={<ClimbingWalls />} />
        <Route path="/affiliatedclubs" element={<AffiliatedClubs />} />
        <Route path="/clubregistration" element={<ClubRegistration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
