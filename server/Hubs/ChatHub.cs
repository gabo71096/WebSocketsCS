using Microsoft.AspNetCore.SignalR;

namespace WebSocketsCSharp.Hubs;

public class ChatHub : Hub
{
    public async Task NewMessage(string username, string message) =>
        await Clients.All.SendAsync("messageReceived", username, message);

    public async Task AddToGroup(string groupName) =>
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

    public async Task RemoveFromGroup(string groupName) =>
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
}
