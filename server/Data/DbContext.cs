using Microsoft.EntityFrameworkCore;
using WebSocketsCS.Entities;

namespace WebSocketsCS.Data
{
    public class ChatContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Chat> Chats { get; set; }
        public DbSet<ChatMessage> ChatMessages { get; set; }
    }
}
