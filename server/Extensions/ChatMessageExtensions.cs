using WebSocketsCS.DTOs;
using WebSocketsCS.Entities;

namespace WebSocketsCS.Extensions
{
    public static class ChatMessageExtensions
    {
        public static ChatMessageDTO MapToDTO(this ChatMessage chatMessage)
        {
            return new ChatMessageDTO
            {
                Username = chatMessage.Username,
                Message = chatMessage.Message,
                Chat = new ChatDTO
                {
                    RoomName = chatMessage.Chat.RoomName
                }
            };
        }
    }
}
