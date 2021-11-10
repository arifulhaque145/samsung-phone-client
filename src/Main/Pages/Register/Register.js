import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Navs from "../../Components/Navs";
import useAuth from "../../Hooks/useAuth";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [err, setErr] = useState("");
  const history = useHistory();
  const { registerAccount } = useAuth();

  const onSubmit = (data) => {
    const { name, email, password, password2 } = data;
    if (password !== password2) {
      setErr("Password Mismatched");
      return;
    }
    registerAccount(name, email, password, history);
    console.log(data);
  };

  return (
    <>
      <Navs />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          onChange={() => setErr("")}
        />
        <br />
        {errors?.name?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors?.name?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        <br />
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i,
          })}
          placeholder="Email"
          onChange={() => setErr("")}
        />
        <br />
        {errors?.email?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors?.email?.type === "pattern" && <p>Enter a valid email</p>}
        <br />
        <input
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          placeholder="Password"
          type="password"
          onChange={() => setErr("")}
        />
        <br />
        {errors?.password?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors?.password?.type === "minLength" && (
          <p>Password must be at least 6 characters</p>
        )}
        <br />
        <input
          {...register("password2", {
            required: true,
            minLength: 6,
          })}
          placeholder="ReType Password"
          type="password"
          onChange={() => setErr("")}
        />
        <br />
        {errors?.password2?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors?.password2?.type === "minLength" && (
          <p>Password must be at least 6 characters</p>
        )}
        <br />
        <input type="submit" />
      </form>
      <p>{err}</p>
    </>
  );
}

export default Register;
