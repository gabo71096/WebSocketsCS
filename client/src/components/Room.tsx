/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Typography } from "@mui/material";
import { forwardRef, useEffect } from "react";
import { addToGroup, connection, removeFromGroup } from "../utilities/socket";
import { ChatMessage } from "../types";
import { useLoadingStore } from "../utilities/store";

interface Props {
  messages: ChatMessage[];
  selectedRoom: string;
}

export const Room = forwardRef(({ messages, selectedRoom }: Props, ref) => {
  const { loading, setLoading } = useLoadingStore();

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
