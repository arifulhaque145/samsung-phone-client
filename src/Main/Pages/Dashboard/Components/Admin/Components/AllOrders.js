import React, { useEffect, useState } from "react";

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
        <p>{items.item}</p>
      ))}
    </div>
  );
}

export default AllOrders;
