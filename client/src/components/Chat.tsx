import { Box, Button, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Room } from "./Room";
import { newMessage } from "../utilities/socket";
import { useLayoutEffect, useRef, useState } from "react";
import { useMessageStore, useRoomStore, useUserStore } from "../utilities/store";
import { scrollToBottom } from "../utilities/utilities";

export default function Chat() {
  const bottom = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const { selectedRoom, setSelectedRoom } = useRoomStore();
  const { username, setUsername } = useUserStore();
  const { messages, setMessages } = useMessageStore();

  useLayoutEffect(() => {
    scrollToBottom(bottom?.current);
  }, [messages]);

  return (
    <Paper className="p-4" variant="outlined">
      <Typography className="mb-4" variant="h5">
        {selectedRoom}
      </Typography>
      <Room ref={bottom} selectedRoom={selectedRoom} />
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
