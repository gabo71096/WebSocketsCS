import { Box, Button, Typography } from "@mui/material";
import { useRoomStore } from "../utilities/store";

export default function RoomSelection() {
  const rooms = ["Room 1", "Room 2", "Room 3"];
  const { setSelectedRoom } = useRoomStore();

  return (
    <Box className="flex flex-col gap-2 h-96 items-center justify-center">
      <Typography variant="h5">Choose a room</Typography>
      {rooms.map((room, index) => (
        <Button className="col-span-6" key={index} onClick={() => setSelectedRoom(room)} variant="outlined">
          {room}
        </Button>
      ))}
    </Box>
  );
}
