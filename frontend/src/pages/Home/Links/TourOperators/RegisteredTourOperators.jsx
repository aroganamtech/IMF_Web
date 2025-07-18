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


function RegisteredTourOperators() {
   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }, [pathname]);
    const registereddetails=[
        {
            id:1,
            title:'Above14000ft',
            email:'E-Mail: kaushal@above14000ft.com',
            description:'For eons explorers, adventurers, spiritual seeker and ordinary people have been drawn to the the most revered mountain range in the world The Himalayas. They have come to discover new frontiers, new challenges or to discover a new version of themselves. The Himalayas, after all, challenge your notions of limitations, endurance, survival and above all your self. At Above14000ft we offer pure Himalayan journeys that help you re-discover yourself. Leave the map and let your wanderlust take flight, let us guide you through the odds to explore the unexplored. Gear up to experience high peaks, hidden valleys, remote glaciers and indigenous cultures',
            img:'https://indmount.org/IMF/download?filePath=/imffs01/imfdocs/club/activities/kaushal@above14000ft.com/LOGO.jpg',
            text:'Near Log Huts, Log Huts area, Manali-175131, Distt. Kullu,H.P.',
            phoneNumber: '9816544803, 9816632281'


        },
         {
            id:2,
            title:"Above14000ft",
            email:"E-Mail: kaushal@above14000ft.com",
            description:"For eons explorers, adventurers, spiritual seeker and ordinary people have been drawn to the the most revered mountain range in the world The Himalayas. They have come to discover new frontiers, new challenges or to discover a new version of themselves. The Himalayas, after all, challenge your notions of limitations, endurance, survival and above all your self. At Above14000ft we offer pure Himalayan journeys that help you re-discover yourself. Leave the map and let your wanderlust take flight, let us guide you through the odds to explore the unexplored. Gear up to experience high peaks, hidden valleys, remote glaciers and indigenous cultures",
            img:"https://indmount.org/IMF/download?filePath=/imffs01/imfdocs/club/activities/kaushal@above14000ft.com/LOGO.jpg",
            text:"Near Log Huts, Log Huts area, Manali-175131, Distt. Kullu,H.P.",
            phoneNumber: "9816544803, 9816632281"


        },
        {
            id:3,
            title:'Above14000ft',
            email:'E-Mail: kaushal@above14000ft.com',
            description:'For eons explorers, adventurers, spiritual seeker and ordinary people have been drawn to the the most revered mountain range in the world The Himalayas. They have come to discover new frontiers, new challenges or to discover a new version of themselves. The Himalayas, after all, challenge your notions of limitations, endurance, survival and above all your self. At Above14000ft we offer pure Himalayan journeys that help you re-discover yourself. Leave the map and let your wanderlust take flight, let us guide you through the odds to explore the unexplored. Gear up to experience high peaks, hidden valleys, remote glaciers and indigenous cultures',
            img:'https://indmount.org/IMF/download?filePath=/imffs01/imfdocs/club/activities/kaushal@above14000ft.com/LOGO.jpg',
            text:'Near Log Huts, Log Huts area, Manali-175131, Distt. Kullu,H.P.',
            phoneNumber: '9816544803, 9816632281'


        },
         {
            id:4,
            title:"Above14000ft",
            email:"E-Mail: kaushal@above14000ft.com",
            description:"For eons explorers, adventurers, spiritual seeker and ordinary people have been drawn to the the most revered mountain range in the world The Himalayas. They have come to discover new frontiers, new challenges or to discover a new version of themselves. The Himalayas, after all, challenge your notions of limitations, endurance, survival and above all your self. At Above14000ft we offer pure Himalayan journeys that help you re-discover yourself. Leave the map and let your wanderlust take flight, let us guide you through the odds to explore the unexplored. Gear up to experience high peaks, hidden valleys, remote glaciers and indigenous cultures",
            img:"https://indmount.org/IMF/download?filePath=/imffs01/imfdocs/club/activities/kaushal@above14000ft.com/LOGO.jpg",
            text:"Near Log Huts, Log Huts area, Manali-175131, Distt. Kullu,H.P.",
            phoneNumber: "9816544803, 9816632281"


        },
    ];
  return (
    <div>
      <Typography
             variant="h4"
             fontWeight="bold"
             color="orange"
             mb={2}
             style={{ textAlign: "center", textDecoration: "underline" ,marginTop:'20px'}}
           >
            REGISTERED TOUR OPERATORS
            
           </Typography>
           <Container>
             {registereddetails.map((items)=>(
           <Card key={items.id} sx={{marginTop:'20px',borderColor:'gray',border:'solid 1px'}}>
             <Box
              sx={{
                backgroundColor: 'skyblue',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            
              }}
            >
       
            
             <CardHeader
            title={
              <Typography
                variant="h6"
                fontWeight="bold"
                color="black"
                
              >
                {items.title}
              </Typography>
            }
          />
           
           <CardHeader title={
            <Typography variant='h6' color='black'  >
                {items.email}
            </Typography>
           }
           >

           </CardHeader>
           </Box>
           <CardContent>
            <Box
            sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}
            >
            <Typography variant='h6' fontSize='15px' sx={{width:'50%'}}>
                {items.description}
            </Typography>
          <img style={{width:'25%', height: '24vh',marginRight:'10%'}} alt={items.title} src={items.img}/>

            </Box>
           </CardContent>
           <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'skyblue'}}>
             <CardHeader title={
            <Typography variant='h6' color='black'>
                {items.text}

            </Typography>
           }
           />
             <CardHeader title={
            <Typography variant='h6' color='black'>
                {items.phoneNumber}

            </Typography>
           }
           />


           </Box>
          

           </Card>
           ))}
           </Container>
    </div>
  )
}

export default RegisteredTourOperators