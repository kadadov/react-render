import React, { useState } from "react";
import { Card, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ComponentD from "./ComponentD";

const ComponentC = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <Card sx={{ padding: "20px", marginTop: "20px" }}>
      ComponentC counter: {counter}
      <Fab color="primary" size="small" onClick={() => setCounter(counter + 1)}>
        <AddIcon />
      </Fab>
      {children}
      {/* <ComponentD /> */}
    </Card>
  );
};

export default ComponentC;
