import React, { useEffect, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth";
import Order from "./Order";

function MyOrder() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

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
