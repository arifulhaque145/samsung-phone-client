import React, { useEffect, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth";

function AllUsers() {
  const [data, setdata] = useState([]);
  const { deleteNewUser } = useAuth();

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

  const deleteUser = (id, email, uid) => {
    deleteNewUser(uid);
    fetch("http://localhost:5000/users/" + id, {
      method: "delete",
    });

    fetch("http://localhost:5000/order/" + email, {
      method: "delete",
    });

    fetch("http://localhost:5000/review/" + email, {
      method: "delete",
    });
  };

  return (
    <div>
      {data.slice(1, data.length).map((item, i) => (
        <div key={i}>
          <p>{item.email}</p>
          <button onClick={() => editUser(item._id)}>Edit</button>
          <button onClick={() => deleteUser(item._id, item.email, item.uid)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;
