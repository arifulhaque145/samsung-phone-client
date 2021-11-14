import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import OrderCard from "./Orders/OrderCard";

function AllOrders() {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    const url = "https://quiet-savannah-39001.herokuapp.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [data]);

  return (
    <Box>
      <h1>Orders</h1>
      {data.map((items) => (
        <OrderCard key={items._id} data={items} />
      ))}
    </Box>
  );
}

export default AllOrders;
