import {
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

 useEffect(()=>{
 },[])

  if (isLoading) {
    return (
      <Box
        className="loading"
        sx={{
          display: "flex",
          width: "100%",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">
          <CircularProgress color="warning" />
        </Typography>
      </Box>
    );
  }

  

  return (
    <>
     <Box sx={{ width:"100%",height:{
       xs:"auto",
       sm: 665,
       md: 600,
       lg: 730,
       xl: 670,
     }, paddingTop:"2rem", paddingBottom:"2rem"}}  className="pt-5 registerSec">
        <Typography variant="h3" align="center" color="gray">Document DashBoard</Typography>
      <Box sx={{width:"100%", height:"90%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Card sx={{width:{
           xs: 380,
           sm: "90%",
           md: "90%",
           lg: "80%",
           xl: "70%",
        },height:{
           xs: 420,
           sm: "60%",
           md: "50%",
           lg: "50%",
           xl: "50%",
        }, marginTop:"2rem",display:"flex", alignItems:"center", justifyContent:"center" , flexDirection:"column"}}>
          <Typography variant="h5" align="center" sx={{paddingTop:"2rem"}}>Manage Your Document Here !!</Typography>
          <Box sx={{width:"60%", marginTop:"1rem" ,height:{
             xs: "30%",
             sm: "40%",
             md: "40%",
             lg: "40%",
             xl: "100%",
          }, display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection : {
            xs : "column",
            sm : "column",
            md : "column",
            lg : "row",
            xl : "row"
          }}}>
            <Link to="/document/allDocument">
            <Button color="warning" variant="outlined" sx={{width:{
               xs: 300,
               sm : 360,
               md : 360,
               lg : "auto",
               xl : "auto",

            }}}>View All Document</Button>
            </Link>
            <Link to="/document/createDocument">
            <Button  color="warning" variant="outlined"  sx={{width:{
               xs: 300,
               sm : 360,
               md : 360,
               lg : "auto",
               xl : "auto",
            }}}>Create Document</Button>
            </Link>
          </Box>
        </Card>
      </Box>
     </Box>

    </>
  );
};

export default HomePage;
