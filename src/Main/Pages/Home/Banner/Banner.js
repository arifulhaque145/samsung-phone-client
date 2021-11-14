import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Banner() {
  return (
    <Box sx={{ my: { lg: 1, xs: 3 } }}>
      <Box
        sx={{
          backgroundImage: `url(${"https://www.cellphonebd.com/wp-content/uploads/2020/06/cat-mobiles.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          height: { lg: 500 },
          p: { xs: 5 },
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", height: { lg: 500 } }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", ml: { lg: 5 } }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: { lg: 700, xs: 500 },
                fontSize: { lg: "3em", xs: "1.5em" },
              }}
            >
              Find Your Best Samsung Mobile Phone Here
            </Typography>
            <Typography
              sx={{
                color: "white",
                my: { lg: 4 },
                fontSize: { lg: "2em", xs: "1em" },
              }}
            >
              Original LCD Screen with lower rate
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
