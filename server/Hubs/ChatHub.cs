using Microsoft.AspNetCore.SignalR;

namespace WebSocketsCSharp.Hubs;

public class ChatHub : Hub
{
    private Dictionary<string, ChatMessage[]> Rooms { get; set; } = [];

    public async Task NewMessage(string username, string message, string room)
    {
        ChatMessage newMessage = new()
        {
            Id = Guid.NewGuid(),
            Username = username,
            Message = message,
            CreatedAt = DateTimeOffset.Now
        };

        if (Rooms.TryGetValue(room, out ChatMessage[] value))
        {
            Rooms[room] = [.. value, newMessage];
        }
        else
        {
            Rooms[room] = [newMessage];
        }

        await Clients.All.SendAsync("newMessage", Rooms[room]);
    }

    public async Task AddToGroup(string groupName) =>
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

    public async Task RemoveFromGroup(string groupName) =>
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
}
public class ChatMessage
{
    public Guid Id { get; set; }
    public string Username { get; set; }
    public string Message { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}
