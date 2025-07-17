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
      <Typography variant="h4" className="about_climbing_heading">
        About Climbing in India
      </Typography>
      <Grid container spacing={4}>
        {/* LEFT COLUMN - Cards */}
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <Box className="about_climbing_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3520833435146!2d76.93332480482869!3d11.012188410673566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8592085a15a9b%3A0x9548be99f316cd09!2sAgricultural%20Engineering%20College%20and%20Research%20Institute!5e0!3m2!1sen!2sin!4v1752587848874!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Climbing Map"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutClimbing;
