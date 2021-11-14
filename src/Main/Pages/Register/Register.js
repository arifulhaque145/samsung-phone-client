import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [err, setErr] = useState("");
  const loaction = useLocation();
  const history = useHistory();
  const { registerAccount, alert, error } = useAuth();

  const onSubmit = (data) => {
    const { name, email, password, password2 } = data;
    if (password !== password2) {
      setErr("Password Mismatched");
      return;
    }
    registerAccount(name, email, password, history, loaction);
  };

  return (
    <>
      <Box
        sx={{
          my: 12,
          mx: "auto",
          width: "25%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            variant="standard"
            {...register("name", { required: true, maxLength: 20 })}
            sx={{ width: "100%" }}
            onChange={() => setErr("")}
          />
          <br />
          {errors?.name?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors?.name?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              First name cannot exceed 20 characters
            </p>
          )}
          <br />
          <TextField
            label="Email"
            variant="standard"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i,
            })}
            sx={{ width: "100%" }}
            onChange={() => setErr("")}
          />
          <br />
          {errors?.email?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors?.email?.type === "pattern" && (
            <p style={{ color: "red" }}>Enter a valid email</p>
          )}
          <br />
          <TextField
            label="Password"
            variant="standard"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            sx={{ width: "100%" }}
            type="password"
            onChange={() => setErr("")}
          />
          <br />
          {errors?.password?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors?.password?.type === "minLength" && (
            <p style={{ color: "red" }}>
              Password must be at least 6 characters
            </p>
          )}
          <br />
          <TextField
            label="ReType Password"
            variant="standard"
            {...register("password2", {
              required: true,
              minLength: 6,
            })}
            sx={{ width: "100%" }}
            type="password"
            onChange={() => setErr("")}
          />
          <br />
          {errors?.password2?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors?.password2?.type === "minLength" && (
            <p style={{ color: "red" }}>
              Password must be at least 6 characters
            </p>
          )}
          <p style={{ color: "red" }}>{err}</p>
          <Button variant="contained" type="submit" sx={{ my: 2 }}>
            Register
          </Button>
        </form>
        {alert.length !== 0 && (
          <Alert severity="success" sx={{ my: 5 }}>
            {alert}
          </Alert>
        )}
        {error.length !== 0 && (
          <Alert severity="error" sx={{ my: 5 }}>
            {error}
          </Alert>
        )}
      </Box>
    </>
  );
}

export default Register;
