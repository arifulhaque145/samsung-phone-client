import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import UserCard from "./Users/UserCard";

function AllUsers() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const url = "https://quiet-savannah-39001.herokuapp.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [data]);

  return (
    <Box>
      {data.slice(1, data.length).map((item, i) => (
        <UserCard key={i} data={item} />
      ))}
    </Box>
  );
}

export default AllUsers;
