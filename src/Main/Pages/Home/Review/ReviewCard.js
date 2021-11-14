import {
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

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
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Typography variant="body2" color="text.secondary">
            {review}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ReviewCard;
