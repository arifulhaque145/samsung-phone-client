import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Purchase() {
  const { id } = useParams();
  const { user } = useAuth();
  const [purchaseData, setPurchaseData] = useState({});

  const url = `https://quiet-savannah-39001.herokuapp.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPurchaseData(data));

  const placeOrder = () => {
    const url = `https://quiet-savannah-39001.herokuapp.com/orders`;
    const { displayName, email } = user;
    const { name } = purchaseData;

    const datas = {
      itemid: id,
      item: name,
      name: displayName,
      email,
      count: 1,
      status: "pending",
    };

    fetch(url, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(datas),
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
