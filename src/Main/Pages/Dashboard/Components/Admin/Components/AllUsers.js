import React, { useEffect, useState } from "react";

function AllUsers() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [data]);

  const editUser = (id) => {
    fetch("http://localhost:5000/users/" + id, {
      method: "put",
    });
  };

  const deleteUser = (id) => {
    fetch("http://localhost:5000/users/" + id, {
      method: "delete",
    });
  };

  return (
    <div>
      {data.slice(1, data.length).map((item, i) => (
        <div key={i}>
          <p>{item.email}</p>
          <button onClick={() => editUser(item._id)}>Edit</button>
          <button onClick={() => deleteUser(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;
