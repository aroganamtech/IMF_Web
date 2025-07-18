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
          Dormitories
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="bold"
          color="black"
          style={{ marginTop: "20px" }}
        >
          Users can now book for stay in IMF dormitory through the online
          portal. User must have a valid login on the portal and completed
          profile. To book your seat in dormitory,
          <span style={{ color: "orange" }}> Click here</span>
        </Typography>
      </Container>
    </div>
  );
}

export default Dormitories;
