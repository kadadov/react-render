import React, { useState } from "react";
import { Card, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ComponentD = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Card sx={{ padding: "20px", marginTop: "20px" }}>
      ComponentD counter: {counter}
      <Fab color="primary" size="small" onClick={() => setCounter(counter + 1)}>
        <AddIcon />
      </Fab>
    </Card>
  );
};

export default ComponentD;
