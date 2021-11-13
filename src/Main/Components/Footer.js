import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: 200,
        bgcolor: "black",
      }}
    >
      <Box sx={{ color: "white" }}>
        <Typography variant="body1">SamsungBD @ Copywright 2021</Typography>
        <Box sx={{ my: 2 }}>
          <FacebookIcon />
          <TwitterIcon sx={{mx: 2}} />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
