import { Button, Paper, TextField, Typography } from "@mui/material";
import { useUserStore } from "../utilities/store";
import { useState } from "react";

export default function UsernameInput() {
  const [value, setValue] = useState("");
  const { setUsername } = useUserStore();

  return (
    <Paper
      className="border flex flex-col items-center justify-center h-96"
      component={"form"}
      elevation={0}
      onSubmit={(e) => {
        e.preventDefault();
        setUsername(value);
      }}
    >
      <Typography className="mb-4" variant="h5">Enter your username</Typography>
      <TextField
        className="mb-2"
        label="Username"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your username"
        value={value}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Paper>
  );
}
