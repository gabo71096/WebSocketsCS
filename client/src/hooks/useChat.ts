/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect } from "react";
import { useMessageStore } from "../utilities/store";
import { connection } from "../utilities/socket";
import { ChatMessage, Chats } from "../types";
import { scrollToBottom } from "../utilities/utilities";

export default function useChat(selectedRoom: string, element?: HTMLDivElement) {
  const { messages, appendMessages, setMessages } = useMessageStore();

  useEffect(() => {
    connection.on("newMessage", (data: ChatMessage) => data.chat.roomName === selectedRoom && appendMessages(data));
    connection.on("getMessagesForRoom", (data: Chats) => setMessages(data.chatMessages));

    return () => {
      connection.off("newMessage");
      connection.off("getMessagesForRoom");
    };
  }, [element, selectedRoom]);

  useLayoutEffect(() => {
    scrollToBottom(element);
  }, [messages]);

  return { messages };
}
