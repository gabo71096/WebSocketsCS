import { Box, Button, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Room } from "./Room";
import { newMessage } from "../utilities/socket";
import useChat from "../hooks/useChat";
import { useRef, useState } from "react";
import { useRoomStore, useUserStore } from "../utilities/store";

export default function Chat() {
  const bottom = useRef<HTMLDivElement>();
  const [message, setMessage] = useState("");
  const { selectedRoom, setSelectedRoom } = useRoomStore();
  const { username, setUsername } = useUserStore();
  const { messages, setMessages } = useMessageStore();

  return (
    <Paper className="p-4" variant="outlined">
      <Typography className="mb-4" variant="h5">{selectedRoom}</Typography>
      <Room messages={messages} ref={bottom} selectedRoom={selectedRoom} />
      <Paper
        className="flex mb-4 px-4 py-1"
        component={"form"}
        onSubmit={async (e) => {
          e.preventDefault();
          setMessage("");
          await newMessage(username, message, selectedRoom);
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
      <Box className="flex gap-2">
        <Button
          onClick={() => {
            setSelectedRoom("");
            setMessages([]);
          }}
          variant="outlined"
        >
          Change Room
        </Button>
        <Button
          onClick={() => {
            setUsername("");
            setMessages([]);
          }}
          variant="outlined"
        >
          Change Username
        </Button>
      </Box>
    </Paper>
  );
}
