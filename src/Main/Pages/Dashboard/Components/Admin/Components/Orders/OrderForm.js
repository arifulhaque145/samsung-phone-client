import React from "react";
import { useForm } from "react-hook-form";

function OrderForm({ newData }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/orders/${newData._id}`, {
      method: "put",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // console.log(newData);
  };

  return (
    <div>
      <h1>This is order form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("status")}>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default OrderForm;
