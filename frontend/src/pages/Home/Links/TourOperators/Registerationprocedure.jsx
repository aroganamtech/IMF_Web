import React from 'react';
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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Registerationprocedure() {
   const { pathname } = useLocation();
     useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      }, [pathname]);
  return (
    <div>
        <Container>
       <Typography
                   variant="h4"
                   fontWeight="bold"
                   color="orange"
                   mb={2}
                   style={{ textAlign: "center", textDecoration: "underline" ,marginTop:'20px'}}
                 >
                  REGISTRATION PROCEDURE
                  
                 </Typography>
                 <Box>
                    <Typography variant='h5' color='black' style={{marginTop:'20px'}}>
                        Registration of Tour Operators and Travel Agents
                    </Typography>
                    <Box sx={{minWidth:'100%'}}>
                      <Typography variant='h6' color='orange' style={{marginTop:'20px'}}>
                        1. Online Method
                    </Typography>
                     <Typography fontSize='16px' fontWeight='bold' color='black' style={{marginTop:'20px'}}>
                        Tour Operators/Travel Agents can register online on IMF website. Please download and Follow the step by step guide.<span style={{color:'orange'}}>Download Document</span>
                    </Typography>
                      <Typography variant='h6' color='orange' style={{marginTop:'20px'}}>
                      2. Offline Method
                    </Typography>
                     <Typography fontSize='16px' fontWeight='bold' color='black' style={{marginTop:'20px'}}>
                      Tour Operators/Travel Agents can also register with IMF using the offline Method. Please download and refer the attached document.<span style={{color:'orange'}}>Download Document</span>
                    </Typography>

                    </Box>

                 </Box>
                 </Container>

    </div>
  )
}

export default Registerationprocedure