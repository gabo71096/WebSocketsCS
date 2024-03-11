import { Container, IconButton, InputBase, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Room } from "./components/Room";
import { newMessage } from "./utilities/socket";
import useChat from "./hooks/useChat";
import useConnection from "./hooks/useConnection";

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState("Null");
  const [message, setMessage] = useState("");
  const rooms = ["Room 1", "Room 2", "Room 3"];
  const bottom = useRef<HTMLDivElement>();

  useConnection();
  const { messages } = useChat(selectedRoom, bottom.current);

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
        {selectedRoom === "Null" ? (
          <p className="mb-4">Select a room</p>
        ) : (
          <Room messages={messages} ref={bottom} selectedRoom={selectedRoom} />
        )}
        <Paper
          className="flex px-4 py-1"
          component={"form"}
          onSubmit={async (e) => {
            e.preventDefault();
            setMessage("");
            await newMessage("user", message, selectedRoom);
          }}
          variant="outlined"
        >
          <InputBase
            className="w-full"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            value={message}
          />
          <IconButton type="submit">
            <SendIcon className="text-blue-500" />
          </IconButton>
        </Paper>
      </Paper>
    </Container>
  );
}
