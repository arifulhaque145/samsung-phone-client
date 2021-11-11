import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import Navs from "../../Components/Navs";
import useAuth from "../../Hooks/useAuth";

function Login() {
  const location = useLocation();
  const history = useHistory();

  const destination = location?.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { googleAccount, loginUser } = useAuth();

  const onSubmit = (data) => {
    loginUser(data.email, data.password);
    history.replace(destination);
  };

  const googleSignIn = () => {
    googleAccount(location, history);
  };

  return (
    <>
      <Navs />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: true,
            maxLength: 20,
            pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i,
          })}
          placeholder="Email"
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
        <input
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
          placeholder="Password"
        />
        <br />
        {errors?.password?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors?.password?.type === "minLength" && (
          <p>Password must be at least 6 characters</p>
        )}
        <br />
        <input type="submit" />
      </form>
      <hr />
      <button onClick={googleSignIn}>Google Signin</button>
    </>
  );
}

export default Login;
