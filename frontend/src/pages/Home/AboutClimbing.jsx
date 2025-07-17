import React, { useState } from "react";
import "../../styles/Home/AboutClimbing.scss";
import { Box, Typography, Card, CardContent, Link, Grid } from "@mui/material";
import HikingIcon from "@mui/icons-material/Hiking";
import UpdateIcon from "@mui/icons-material/Update";
import BuildIcon from "@mui/icons-material/Build";
import MapIcon from "@mui/icons-material/Map";

function AboutClimbing() {
  const [hovered, setHovered] = useState(null);

  const panels = [
    {
      icon: <HikingIcon className="about_climbing_card_icon_svg" />,
      title: "Activities",
      bgImage:
        "https://ns2.bagpack2go.com/admin/webroot/img/uploads/blog/1626252616_675961-treking-and-hiking-to-mountain-guide.jpg",
      links: ["Mountaineering", "Rock Climbing", "Sport Climbing", "Trekking"],
    },
    {
      icon: <UpdateIcon className="about_climbing_card_icon_svg" />,
      title: "Expedition Update",
      bgImage:
        "https://assets.rmiguides.com/_includes/_images/everest_full.jpg",
      links: ["Expedition Archive", "Expedition Application Process"],
    },
    {
      icon: <BuildIcon className="about_climbing_card_icon_svg" />,
      title: "Services",
      bgImage:
        "https://in.nec.com/en_IN/solutions_services/global-development-and-delivery-center/images/header_sp.jpg",
      links: [
        "Climbing Walls",
        "Dormitories",
        "Equipment Hire",
        "Weather Forecast Service",
      ],
    },
    {
      icon: <MapIcon className="about_climbing_card_icon_svg" />,
      title: "Tour Operators",
      bgImage:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeHFXdVgHECwoHbCjKFzaQ1lue5HMcEcDR2RlfP7yq5-E0XWsc5aWSUp6mSnKl0lT7slWZ-1h8RduMZqxFz9AnrQ8xrtZQ42BbEjptVzGkVK0lSPdaTQnf_s4AHy5lJzLm-PSYe?key=IdIxBdimYYfv3JExqpF5xg",
      links: [
        "Advisory",
        "Registered Tour Operators",
        "Registration Procedure",
      ],
    },
  ];

  return (
    <Box className="about_climbing_container">
      <Typography variant="h3" className="about_climbing_heading">
        About Climbing in India
      </Typography>
      <Grid container spacing={4}>
        {/* LEFT COLUMN - Cards */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {panels.map((panel, index) => {
              const isHovered = hovered === index;
              const isShrinking =
                hovered !== null &&
                hovered !== index &&
                hovered % 2 === index % 2;

              return (
                <Box
                  key={index}
                  className={`about_climbing_card_wrapper ${
                    isHovered ? "expanded" : isShrinking ? "shrunk" : ""
                  }`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  sx={{ width: "calc(50% - 8px)" }} // 2 cards per row with gap
                >
                  <Card
                    className="about_climbing_card"
                    style={{
                      width: "-webkit-fill-available",
                      backgroundImage: `linear-gradient(rgba(0, 0, 51, 0.7), rgba(0, 0, 51, 0.7)), url(${panel.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <CardContent className="about_climbing_card_content">
                      <Box className="about_climbing_card_header">
                        <Box className="about_climbing_card_icon">
                          {panel.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          className="about_climbing_card_title"
                        >
                          {panel.title}
                        </Typography>
                      </Box>
                      <Box className="about_climbing_card_links">
                        {panel.links.map((link, j) => (
                          <Link
                            href="#"
                            underline="none"
                            className="about_climbing_card_link"
                            key={j}
                          >
                            {link}
                          </Link>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Grid>

        {/* RIGHT COLUMN - Map */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="about_climbing_map">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=10lhqAQN9fWxZusOX4MrXdxocOUB2sdc&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0, position: "relative" }}
              allowFullScreen=""
              loading="lazy"
              title="Top Peaks Map"
            />
          </Box>
          <Box className="about_climbing_buttons">
            {["Top Peaks", "Virgin Peaks", "Trekking Peaks", "Others"].map(
              (label, index) => (
                <button className="about_climbing_button" key={index}>
                  {label}
                </button>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutClimbing;
