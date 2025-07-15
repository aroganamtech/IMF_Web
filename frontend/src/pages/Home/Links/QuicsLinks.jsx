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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Card data with back content as an array
const quickLinks = [
  {
    title: "Expeditions",
    image: "https://indmount.org/IMF/img/frontCardImg1.jpg",
    backList: [
      "Expedition Rules",
      "Peak Details",
      "Expedition Guide",
      "Android App",
    ],
  },
  {
    title: "Membership",
    image: "https://indmount.org/IMF/img/frontCardImg5.jpg",
    backList: ["List of Members", "Affiliate Members", "IMF Membership"],
  },
  {
    title: "Sport Climbing",
    image: "https://indmount.org/IMF/img/frontCardImg3.jpg",
    backList: ["About Sport Climbing", "Competitions", " Climbing Walls"],
  },
  {
    title: "Affiliated Clubs",
    image: "/images/affiliatedclubs.jpg",
    backList: ["Affiliated Clubs", "Club Registration"],
  },
  {
    title: "Tour Operators",
    image: "/images/touroperators.jpg",
    backList: [
      "Registered Tour Operators",
      " Registration Procedure",
      "Safety Advisory",
    ],
  },
  {
    title: "Misc Links",
    image: "/images/misclinks.jpg",
    backList: [
      " Discussion Forum",
      " Dormitories",
      " Grievance",
      "Courses & Workshops",
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
                  bgcolor: "black",
                  color: "#fff",
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
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "14px", color: "#fff" }}
                            >
                              <ArrowForwardIosIcon />
                              {item}
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
