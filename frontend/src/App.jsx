import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ExpetitionRule from "./pages/Home/Links/Expetitions/ExpetitionRule";
import RegisteredTourOperators from "./pages/Home/Links/TourOperators/RegisteredTourOperators";
import Registerationprocedure from "./pages/Home/Links/TourOperators/Registerationprocedure";
import SafetyAdvisory from "./pages/Home/Links/TourOperators/SafetyAdvisory";
import DiscussionForum from "./pages/Home/Links/MiscLinks/DiscussionForum";
import Dormitories from "./pages/Home/Links/MiscLinks/Dormitories";
import Grievance from "./pages/Home/Links/MiscLinks/Grievance";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expetitionsrule" element={<ExpetitionRule />} />
         <Route path="/registeredtourdetails" element={<RegisteredTourOperators />} />
          <Route path="/registerprocedure" element={<Registerationprocedure />} />
           <Route path="/safetyadvisory" element={<SafetyAdvisory />} />
            <Route path="/discussionforum" element={<DiscussionForum/>} />
             <Route path="/dormitories" element={<Dormitories/>} />
             <Route path="/grievance" element={<Grievance/>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
