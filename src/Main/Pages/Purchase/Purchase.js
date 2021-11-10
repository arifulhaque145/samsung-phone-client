import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Purchase() {
  const { id } = useParams();
  const { user } = useAuth();
  const [purchaseData, setPurchaseData] = useState({});

  const url = `http://localhost:5000/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPurchaseData(data));

  const placeOrder = () => {
    const url = `http://localhost:5000/orders`;
    const { displayName, email } = user;
    const { name } = purchaseData;

    const data = { item: name, name: displayName, email };
    fetch(url, {
      method: "put",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setPurchaseData(data));
    console.log("Order successfully placed");
  };

  return (
    <div>
      <h1>{purchaseData.name}</h1>
      <h3>{user.email}</h3>
      <a href="/">
        <button onClick={placeOrder}>Place Order</button>
      </a>
    </div>
  );
}

export default Purchase;
