import React from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <h1>This is product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          style={{ textTransform: "lowercase" }}
        />
        <input type="number" {...register("price", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddProduct;
