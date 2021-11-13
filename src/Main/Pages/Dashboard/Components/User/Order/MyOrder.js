import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth";
import Order from "./Order";

function MyOrder() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://quiet-savannah-39001.herokuapp.com/order?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <Box>
      <h1>My Orders</h1>
      {orders.map((item) => (
        <Order key={item._id} data={item} />
      ))}
    </Box>
  );
}

export default MyOrder;
