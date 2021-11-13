import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewContainer from "./ReviewContainer";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://quiet-savannah-39001.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    setLoader(false);
  }, [reviews]);

  return (
    <Box sx={{ textAlign: "center", my: 8 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "light", textTransform: "uppercase" }}
      >
        Reviews
      </Typography>
      <br />
      <br />
      {!loader ? (
        <ReviewContainer>
          {reviews.map((item) => (
            <ReviewCard key={item._id} data={item} />
          ))}
        </ReviewContainer>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}

export default Review;
