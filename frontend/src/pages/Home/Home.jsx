import React from "react";
import { Box } from "@mui/material";
import CarouselSection from "./CarouselSection";
import ContentSection from "./ContentSection";
import "../../styles/Home/Home.scss";
import QuicsLinks from "./Links/QuicsLinks";

function Home() {
  return (
    <Box className="home">
      <CarouselSection />
      <ContentSection />
      <QuicsLinks />
    </Box>
  );
}

export default Home;
