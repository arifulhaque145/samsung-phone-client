import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Banner() {
  return (
    <Box sx={{ my: 6 }}>
      <Box
        sx={{
          backgroundImage: `url(${"https://www.cellphonebd.com/wp-content/uploads/2020/06/cat-mobiles.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          height: 500,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: 500 }}>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
            <Typography variant="h3" sx={{ color: "white", fontWeight: 700 }}>
              Find Your Best Samsung <br /> Mobile Phone Here
            </Typography>
            <Typography variant="h5" sx={{ color: "white", my: 4 }}>
              Original LCD Screen with lower rate
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
