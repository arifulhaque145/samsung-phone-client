import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        variant="outlined"
        {...register("email")}
        placeholder="Email"
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <TextField
        variant="outlined"
        {...register("subject")}
        placeholder="Subject"
        sx={{ my: 2 }}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <TextField
        multiline
        rows={8}
        variant="outlined"
        {...register("body")}
        placeholder="Body"
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <Box sx={{display: "flex", justifyContent: "right"}}>
        <Button variant="contained" type="submit" sx={{ my: 2, width: "25%" }}>
          Send
        </Button>
      </Box>
    </form>
  );
}

export default ContactForm;
