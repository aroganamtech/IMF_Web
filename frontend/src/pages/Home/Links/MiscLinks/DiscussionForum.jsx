import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
  Divider,
  TableHead,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

function DiscussionForum() {
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="orange"
          mb={2}
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginTop: "20px",
          }}
        >
          Discussion Forum
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="bold"
          color="black"
          style={{ marginTop: "20px" }}
        >
          Using the IMF discussion forum uers can now express opinions, share
          thoughts and resources, and engage in community-wide discussions
          related to Expeditions, Trekking, Competitions, Other events etc. To
          post your topic<span style={{ color: "orange" }}> Click here</span>
        </Typography>
      </Container>
    </div>
  );
}

export default DiscussionForum;
