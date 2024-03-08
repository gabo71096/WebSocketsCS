using Microsoft.EntityFrameworkCore;
using WebSocketsCS.Data;
using WebSocketsCSharp.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSignalR();
builder.Services.AddCors((options) =>
{
    options.AddDefaultPolicy((policyOpts) =>
    {
        policyOpts
            .WithOrigins("http://localhost:5173")
            .WithHeaders(["x-requested-with", "x-signalr-user-agent"])
            .AllowCredentials();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<ChatContext>((opt) => opt.UseSqlite("Data Source=database.db"));
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors();
}

app.UseHttpsRedirection();

app.MapHub<ChatHub>("/hub");

app.Run();
