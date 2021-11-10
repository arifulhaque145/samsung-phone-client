import React from "react";

function Order({ data }) {
  const { _id, item, count } = data;

  const handleDelete = (id) => {
    const check = window.confirm("Do you want to delete?");
    check && fetch(`http://localhost:5000/orders/${id}`, { method: "delete" });
  };

  return (
    <div>
      <p>{item}</p>
      <p>{count}</p>
      <button onClick={() => handleDelete(_id)}>delete</button>
    </div>
  );
}

export default Order;
