using WebSocketsCS.Entities;

namespace WebSocketsCS.DTOs
{
    public class ChatMessageDTO
    {
        public string Username { get; set; }
        public string Message { get; set; }
        public ChatDTO Chat { get; set; }
    }
}
