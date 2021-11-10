import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Purchase() {
  const { id } = useParams();
  const { user } = useAuth();
  const [count, setCount] = useState(0);
  const [purchaseData, setPurchaseData] = useState({});

  const url = `http://localhost:5000/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPurchaseData(data));

  const placeOrder = () => {
    const url = `http://localhost:5000/orders`;
    const { displayName, email } = user;
    const { name } = purchaseData;

    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setCount(data.count));

    const data = {
      itemid: id,
      item: name,
      name: displayName,
      email,
      count: count,
      status: "pending",
    };
    fetch(url, {
      method: "put",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setPurchaseData(data));
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
