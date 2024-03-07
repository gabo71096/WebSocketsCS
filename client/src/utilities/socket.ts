import * as signalR from "@microsoft/signalr";

export const connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5200/hub").build();

// Groups
export async function addToGroup(selectedRoom: string) {
  try {
    await connection.invoke("AddToGroup", selectedRoom);
    console.log("Joined to:", selectedRoom);
  } catch (error) {
    setTimeout(addToGroup, 500);
    console.log(error);
  }
}

export async function removeFromGroup(selectedRoom: string) {
  try {
    await connection.invoke("RemoveFromGroup", selectedRoom);
    console.log("Removed from:", selectedRoom);
  } catch (error) {
    setTimeout(removeFromGroup, 500);
    console.log(error);
  }
}

// Messaging
export async function newMessage(username: string, message: string, room: string) {
  try {
    await connection.invoke("NewMessage", username, message, room);
  } catch (error) {
    setTimeout(newMessage, 5000);
    console.log(error);
  }
}

// Connection
export async function connStart() {
  if (connection.state === "Connected") return;

  try {
    await connection.start();
    console.log("Started");
  } catch (error) {
    setTimeout(connStart, 500);
    console.log(error);
  }
}

export async function connStop() {
  if (connection.state === "Disconnected") return;

  try {
    await connection.stop();
    console.log("Stopped");
  } catch (error) {
    setTimeout(connStop, 500);
    console.log(error);
  }
}
