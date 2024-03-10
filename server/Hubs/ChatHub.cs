using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using WebSocketsCS.Data;
using WebSocketsCS.Entities;
using WebSocketsCS.Extensions;

namespace WebSocketsCSharp.Hubs;

public class ChatHub(ChatContext context) : Hub
{
    private readonly ChatContext _context = context;

    public async Task GetMessagesForRoom(string room)
    {
        Chat[] chats = await _context.Chats.Include((c) => c.ChatMessages).Where((c) => c.RoomName == room).ToArrayAsync();
        await Clients.Caller.SendAsync("getMessagesForRoom", chats.MapToDTO());
    }

    public async Task NewMessage(string username, string message, string room)
    {
        Chat[] chats = await _context.Chats.Where((c) => c.RoomName == room).ToArrayAsync();

        // Create chat if it doesn't exist
        Chat chat = null;
        if (chats.Length == 0)
        {
            chat = new() { RoomName = room };
            await _context.Chats.AddAsync(chat);
        }

        // Create chatMessage
        ChatMessage newMessage = new()
        {
            Username = username,
            Message = message,
            Chat = chat ?? chats.Where((chat) => chat.RoomName == room).FirstOrDefault()
        };

        await _context.ChatMessages.AddAsync(newMessage);
        await _context.SaveChangesAsync();
        await Clients.All.SendAsync("newMessage", newMessage.MapToDTO());
    }

    public async Task AddToGroup(string groupName) =>
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

    public async Task RemoveFromGroup(string groupName) =>
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
}
