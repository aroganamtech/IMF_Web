import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import card1 from "../../../../src/assets/images/frontCardimg1.png";
import card2 from "../../../../src/assets/images/frontCardimg2.png";
import card3 from "../../../../src/assets/images/frontCardimg3.png";

import card4 from "../../../../src/assets/images/frontCardimg4.png";

import card5 from "../../../../src/assets/images/frontCardimg5.png";
import card6 from "../../../../src/assets/images/frontCardimg5.png";

const quickLinks = [
  {
    title: "Expeditions",
    image: card1,
    backList: [
      { label: "Expedition Rules", path: "/expetitionsrule" },
      { label: "Peak Details", path: "" },
      { label: "Expedition Guide", path: "" },
      { label: "Android App", path: "" },
    ],
  },
  {
    title: "Membership",
    image: card2,
    backList: [
      { label: "List of Members", path: "" },
      { label: "Affiliate Members", path: "" },
      { label: "IMF Membership", path: "" },
    ],
  },
  {
    title: "Sport Climbing",
    image: card3,
    backList: [
      { label: "About Sport Climbing", path: "" },
      { label: "Competitions", path: "" },
      { label: "Climbing Walls", path: "" },
    ],
  },
  {
    title: "Affiliated Clubs",
    image: card4,
    backList: [
      { label: "Affiliated Clubs", path: "" },
      { label: "Club Registration", path: "" },
    ],
  },
  {
    title: "Tour Operators",
    image: card5,
    backList: [
      { label: "Registered Tour Operators", path: "" },
      { label: "Registration Procedure", path: "" },
      { label: "Safety Advisory", path: "" },
    ],
  },
  {
    title: "Misc Links",
    image: card6,
    backList: [
      { label: "Discussion Forum", path: "" },
      { label: "Dormitories", path: "" },
      { label: "Grievance", path: "" },
      { label: "Courses & Workshops", path: "" },
    ],
  },
];

function QuickLinks() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#d3d3d3", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Quick Links
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {quickLinks.map((link, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={6}
            md={4}
            lg={2}
            sx={{ perspective: 1000 }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                "&:hover": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <Card
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={link.image}
                  alt={link.title}
                  sx={{ height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    py: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {link.title}
                  </Typography>
                </Box>
              </Card>

              <Card
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  background: "linear-gradient(135deg, #ffffff, #8f8c8c)",
                  color: "#000",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: 1,
                }}
              >
                {link.backList.length > 0 ? (
                  <List dense>
                    {link.backList.map((item, idx) => (
                      <ListItem key={idx} sx={{ py: 0 }}>
                        <ListItemText
                          primary={
                            <Link
                              to={item.path}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "14px",
                                  color: "#000",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                  cursor: "pointer",
                                  "&:hover ": {
                                    textDecoration: "underline",
                                    textDecorationColor: "#256dead4",
                                  },
                                }}
                              >
                                <ArrowForwardIosIcon
                                  style={{ fontSize: "14px" }}
                                />
                                {item.label}
                              </Typography>
                            </Link>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body2" color="#ccc">
                    No content
                  </Typography>
                )}
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default QuickLinks;
