/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Typography } from "@mui/material";
import { forwardRef, useEffect } from "react";
import { addToGroup, connection, removeFromGroup } from "../utilities/socket";
import { ChatMessage, Chats } from "../types";
import { useLoadingStore, useMessageStore } from "../utilities/store";

interface Props {
  selectedRoom: string;
}

export const Room = forwardRef<HTMLDivElement, Props>(({ selectedRoom }, ref) => {
  const { loading, setLoading } = useLoadingStore();
  const { messages, appendMessages, setMessages } = useMessageStore();

  useEffect(() => {
    connection.on("newMessage", (data: ChatMessage) => data.chat.roomName === selectedRoom && appendMessages(data));
    connection.on("getMessagesForRoom", (data: Chats) => setMessages(data.chatMessages));

    return () => {
      connection.off("newMessage");
      connection.off("getMessagesForRoom");
    };
  }, [selectedRoom]);

  useEffect(() => {
    setLoading(true);
    addToGroup(selectedRoom);
    connection.invoke("GetMessagesForRoom", selectedRoom).then(() => setLoading(false));

    return () => {
      removeFromGroup(selectedRoom);
    };
  }, [selectedRoom]);

  return (
    <Box className="border h-96 mb-4 overflow-auto p-4 rounded" ref={ref}>
      {loading ? (
        <CircularProgress />
      ) : (
        messages?.map((message, index) => (
          <div key={index}>
            <Typography variant="body1">
              {message.username}: {message.message}
            </Typography>
          </div>
        ))
      )}
    </Box>
  );
});
