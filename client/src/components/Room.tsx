import { Paper, Typography } from "@mui/material";

interface Props {
  selectedRoom: string;
}

export default function Room({ selectedRoom }: Props) {
  return (
    <Paper className="h-96 mb-4 p-4" variant="outlined">
      <Typography variant="body1">{selectedRoom}</Typography>
    </Paper>
  );
}
