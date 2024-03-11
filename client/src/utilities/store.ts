import { create } from "zustand";
import { ChatMessage } from "../types";

interface MessageState {
  messages: ChatMessage[];
  appendMessages: (data: ChatMessage) => void;
  setMessages: (data: ChatMessage[]) => void;
}

export const useMessageStore = create<MessageState>()((set, get) => ({
  messages: [],
  appendMessages: (data) => set({ messages: [...get().messages, data] }),
  setMessages: (data) => set({ messages: data }),
}));

interface LoadingStore {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>()((set) => ({
  loading: false,
  setLoading: (data) => set({ loading: data }),
}));

interface UserStore {
  username: string;
  setUsername: (value: string) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  username: "",
  setUsername: (data) => set({ username: data }),
}));

interface RoomStore {
  selectedRoom: string;
  setSelectedRoom: (value: string) => void;
}

export const useRoomStore = create<RoomStore>()((set) => ({
  selectedRoom: "",
  setSelectedRoom: (data) => set({ selectedRoom: data }),
}));
