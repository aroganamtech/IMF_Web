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

function Dormitories() {
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
          Grievance
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="bold"
          color="black"
          style={{ marginTop: "20px" }}
        >
          If you have any grievance related to Expedition, Trekking and other
          activities of Indian Mountaineering Foundation, member organisations,
          affiliates, tour operators, clubs etc, you can submit your grievance
          here. To submit your grievance you will have to register on IMF
          portal. Through the online Portal, registered users can log and track
          the status of grievances.To submit a grievance{" "}
          <span style={{ color: "orange" }}> Click here</span>
        </Typography>
      </Container>
    </div>
  );
}

export default Dormitories;
