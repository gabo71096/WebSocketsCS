namespace WebSocketsCS.Entities
{
    public class Chat
    {
        public Chat()
        {
            ChatMessages = [];
        }
        public int ChatId { get; set; }
        public string RoomName { get; set; }
        public IList<ChatMessage> ChatMessages { get; set; }
    }
}
