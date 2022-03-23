import React, { memo, useState } from "react";
import { Card, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";

const ComponentB = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Card sx={{ padding: "20px", marginTop: "20px" }}>
      ComponentB counter: {counter}
      <Fab color="primary" size="small" onClick={() => setCounter(counter + 1)}>
        <AddIcon />
      </Fab>
      <ComponentC>
        <ComponentD />
      </ComponentC>
    </Card>
  );
};

export default memo(ComponentB);
