import { Container, IconButton, InputBase, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Room from "./components/Room";

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState("Room 1");
  const rooms = ["Room 1", "Room 2", "Room 3"];

  return (
    <Container className="flex flex-col" maxWidth={"sm"}>
      <ToggleButtonGroup
        className="mb-4 mx-auto"
        exclusive
        onChange={(_, value) => setSelectedRoom(value)}
        value={selectedRoom}
      >
        {rooms.map((room, index) => (
          <ToggleButton key={index} value={room}>
            {room}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Paper className="p-4" variant="outlined">
        <Room selectedRoom={selectedRoom} />
        <Paper className="flex px-4 py-2" component={"form"} variant="outlined">
          <InputBase className="w-full" placeholder="Type a message" />
          <IconButton>
            <SendIcon className="text-blue-500" />
          </IconButton>
        </Paper>
      </Paper>
    </Container>
  );
}
