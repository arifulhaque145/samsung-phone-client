import { Typography } from "@mui/material";
import React from "react";
import ReviewForm from "./ReviewForm";

function Review() {
  return (
    <div>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Write a Review
      </Typography>
      <ReviewForm />
    </div>
  );
}

export default Review;
