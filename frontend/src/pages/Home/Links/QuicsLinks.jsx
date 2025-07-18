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
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import card1 from "../../../../src/assets/images/frontCardimg1.png";
import card2 from "../../../../src/assets/images/frontCardimg2.png";
import card3 from "../../../../src/assets/images/frontCardimg3.png";

import card4 from "../../../../src/assets/images/frontCardimg4.png";

import card5 from "../../../../src/assets/images/frontCardimg5.png";
import card6 from "../../../../src/assets/images/frontCardimg5.png";

// Card data with back content as an array
const quickLinks = [
  {
    title: "Expeditions",
    image: card1,
    backList: [
      { label: "Expedition Rules", link: "/expedition-rules" },
      { label: "Peak Details", link: "/peak-details" },
      { label: "Expedition Guide", link: "/expedition-guide" },
      { label: "Android App", link: "/android-app" },
    ],
  },
  {
    title: "Membership",
    image: card2,
    backList: [
      { label: "List of Members", link: "/members/list" },
      { label: "Affiliate Members", link: "/members/affiliates" },
      { label: "IMF Membership", link: "/membership" },
    ],
  },
  {
    title: "Sport Climbing",
    image: card3,
    backList: [
      { label: "About Sport Climbing", link: "/sportclimbing" },
      { label: "Competitions", link: "/competitions" },
      { label: "Climbing Walls", link: "/climbingwalls" },
    ],
  },
  {
    title: "Affiliated Clubs",
    image: card4,
    backList: [
      { label: "Affiliated Clubs", link: "/affiliatedclubs" },
      { label: "Club Registration", link: "/clubregistration" },
    ],
  },
  {
    title: "Tour Operators",
    image: card5,
    backList: [
      { label: "Registered Tour Operators", link: "/tour-operators" },
      { label: "Registration Procedure", link: "/registration-procedure" },
      { label: "Safety Advisory", link: "/safety-advisory" },
    ],
  },
  {
    title: "Misc Links",
    image: card6,
    backList: [
      { label: "Discussion Forum", link: "/forum" },
      { label: "Dormitories", link: "/dormitories" },
      { label: "Grievance", link: "/grievance" },
      { label: "Courses & Workshops", link: "/courses" },
    ],
  },
];

function QuickLinks() {
  const navigate = useNavigate();
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
              {/* Front Side */}
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

              {/* Back Side */}
              <Card
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  background: "linear-gradient(135deg, #ffffff, #8f8c8c)", // white to gray
                  color: "#000", // optional: change text color for better contrast
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
                      <ListItem
                        key={idx}
                        sx={{ py: 0, cursor: "pointer" }}
                        onClick={() => item.link && navigate(item.link)}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "14px",
                                color: "#000",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                "&:hover": {
                                  textDecoration: "underline",
                                  textDecorationColor: "black",
                                },
                              }}
                            >
                              <ArrowForwardIosIcon
                                style={{ fontSize: "14px" }}
                              />
                              {item.label}
                            </Typography>
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
