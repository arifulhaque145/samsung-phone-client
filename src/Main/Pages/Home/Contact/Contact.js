import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "50%",
        mx: "auto",
        p: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "light", mb: 4, textTransform: "uppercase" }}
      >
        Contact Us
      </Typography>
      <ContactForm />
    </Box>
  );
}

export default Contact;
