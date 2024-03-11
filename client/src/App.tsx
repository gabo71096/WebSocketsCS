import { Container } from "@mui/material";
import useConnection from "./hooks/useConnection";
import { useRoomStore, useUserStore } from "./utilities/store";
import UsernameInput from "./components/UsernameInput";
import RoomSelection from "./components/RoomSelection";
import Chat from "./components/Chat";

export default function App() {
  const { username } = useUserStore();
  const { selectedRoom } = useRoomStore();

  useConnection();

  return (
    <Container className="flex flex-col" maxWidth={"sm"}>
      {!username && <UsernameInput />}
      {username && !selectedRoom && <RoomSelection />}
      {username && selectedRoom && <Chat />}
    </Container>
  );
}
