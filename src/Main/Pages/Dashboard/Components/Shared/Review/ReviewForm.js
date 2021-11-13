import StarIcon from "@mui/icons-material/Star";
import { Alert, Button, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";

function ReviewForm() {
  const [alert, setAlert] = useState(false);
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { displayName, email } = user;
    const review = { displayName, email, rating, ...data };
    fetch("https://quiet-savannah-39001.herokuapp.com/reviews", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Typography variant="h5" sx={{ pl: 2 }}>
            {rating}
          </Typography>
        </Box>
        <TextField
          multiline
          rows={4}
          sx={{ width: "50%", my: 2 }}
          {...register("review", { required: true })}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
      {alert && (
        <Alert sx={{ width: "50%", my: 2 }} severity="success">
          Your review is successfully saved
        </Alert>
      )}
    </Box>
  );
}

export default ReviewForm;
