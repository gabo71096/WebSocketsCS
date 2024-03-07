import { Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { addToGroup, removeFromGroup } from "../utilities/socket";

interface Props {
  selectedRoom: string;
}

export default function Room({ selectedRoom }: Props) {
  useEffect(() => {
    addToGroup(selectedRoom);

    return () => {
      removeFromGroup(selectedRoom);
    };
  }, [selectedRoom]);

  return (
    <Paper className="h-96 mb-4 p-4" variant="outlined">
      <Typography variant="body1">{selectedRoom}</Typography>
    </Paper>
  );
}
