import { Alert, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Login() {
  const location = useLocation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { googleAccount, loginUser, alert, error, isLoading } = useAuth();

  const onSubmit = (data) => {
    setTimeout(() => {
      loginUser(data.email, data.password, location, history);
    }, 2000);
  };

  const googleSignIn = () => {
    googleAccount(location, history);
  };

  if(isLoading){
    return <CircularProgress />;
  }

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
            label="Email"
            variant="standard"
            {...register("email", {
              required: true,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i,
            })}
            sx={{ width: "100%" }}
          />
          <br />
          {errors?.email?.type === "required" && (
            <span>This field is required</span>
          )}
          {errors?.email?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.email?.type === "pattern" && <p>Enter a valid email</p>}
          <br />
          <TextField
            label="Password"
            variant="standard"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            sx={{ width: "100%" }}
          />
          <br />
          {errors?.password?.type === "required" && (
            <span>This field is required</span>
          )}
          {errors?.password?.type === "minLength" && (
            <p>Password must be at least 6 characters</p>
          )}
          <br />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
        <hr style={{ margin: "42px 0" }} />
        <Button variant="contained" onClick={googleSignIn}>
          Google Signin
        </Button>
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

export default Login;
