namespace WebSocketsCS.Entities
{
    public class ChatMessage
    {
        public int ChatMessageId { get; set; }
        public string Username { get; set; }
        public string Message { get; set; }

        public int ChatId { get; set; }
        public Chat Chat { get; set; }
    }
}
