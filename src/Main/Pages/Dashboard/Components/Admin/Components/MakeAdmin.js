import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AdminForm from "./Admin/AdminForm";

function MakeAdmin() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const url = "https://quiet-savannah-39001.herokuapp.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [data]);

  return (
    <Box>
      <Typography variant="h5">Make Admin</Typography>
      {data.slice(1, data.length).map((item, i) => (
        <AdminForm key={i} newData={item} />
      ))}
    </Box>
  );
}

export default MakeAdmin;
