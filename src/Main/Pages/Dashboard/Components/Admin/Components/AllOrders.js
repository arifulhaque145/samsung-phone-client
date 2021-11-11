import React, { useEffect, useState } from "react";
import OrderCard from "./Orders/OrderCard";

function AllOrders() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [data]);

  return (
    <div>
      <h1>Orders</h1>
      {data.map((items) => (
        <OrderCard key={items._id} data={items} />
      ))}
    </div>
  );
}

export default AllOrders;
