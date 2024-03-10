using WebSocketsCS.DTOs;
using WebSocketsCS.Entities;

namespace WebSocketsCS.Extensions
{
    public static class ChatExtensions
    {
        public static List<ChatDTO> MapToDTO(this Chat[] chats)
        {
            return chats.Select((chat) => chat.MapToDTO()).ToList();
        }

        public static ChatDTO MapToDTO(this Chat chat)
        {
            return new ChatDTO
            {
                RoomName = chat.RoomName,
                ChatMessages = chat.ChatMessages.Select((chatMessage) => chatMessage.MapToDTO()).ToList()
            };
        }
    }
}
