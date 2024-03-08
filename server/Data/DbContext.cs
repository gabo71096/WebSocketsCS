using Microsoft.EntityFrameworkCore;
using WebSocketsCS.Entities;

namespace WebSocketsCS.Data
{
    public class ChatContext : DbContext
    {
        public DbSet<Chat> Chats { get; set; }
        public DbSet<ChatMessage> ChatMessages { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=database.db");
        }
    }
}
