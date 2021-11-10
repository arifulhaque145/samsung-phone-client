import React, { useEffect, useState } from "react";
import Order from "./Order";

function MyOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div>
      <h1>My Orders</h1>
      <div>
        {orders.map((item) => (
          <Order key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default MyOrder;
