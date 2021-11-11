import React from "react";
import OrderForm from "./OrderForm";

function OrderCard({ data }) {
  const { item, status } = data;

  return (
    <div>
      <h1>{item}</h1>
      <p>{status}</p>
      <OrderForm newData={data} />
    </div>
  );
}

export default OrderCard;
