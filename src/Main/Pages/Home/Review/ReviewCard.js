import {
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

function ReviewCard({ data }) {
  const { displayName, rating, review } = data;
  return (
    <Card sx={{ width: 300, m: 2, textAlign: "center" }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {displayName}
          </Typography>
          <Rating name="read-only" sx={{ my: 2 }} value={rating} readOnly />
          <Typography variant="body2" color="text.secondary">
            {review}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ReviewCard;
