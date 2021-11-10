import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";

function ReviewForm() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { displayName, email } = user;
    const review = { displayName, email, ...data };
    fetch("http://localhost:5000/reviews", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    });
  };

  return (
    <div>
      <h1>Review form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("rating", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input {...register("review", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;
