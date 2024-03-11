# ChatApp (SignalR Demo)

The idea behind this project is only to understand the basics of SignalR and establish a WebSocket connection to allow real-time communication between the client and the server.

Also I wanted to upskill myself on .NET (C#), because it's the framework we use at my job.

I do mainly frontend, but I intend to get my hands on the backend also, so I needed this to feel more confident.

I always wanted to learn about WebSockets, and was too afraid to even begin, but anyway, I finally gave it a go, because I found a great use case in my job where I should implement this.

So now if you also want to learn about this, you can take a look at the code and learn about my implementation.

# Requirements

You need [Node.js 20 LTS](https://nodejs.org/en) and [.NET 8.0](https://dotnet.microsoft.com/en-us/) in order to get this running.

Also SQLite, but most of the times it's already installed on your system.

# Try It Out

I didn't include Docker in this project, because It was out of this project's scope, so the start up is not going to be just one command.

It's actually 2.

Clone the project, cd into it, open 2 terminals, one for `client` and one for `server`.

Run `yarn dev` on the `client` directory and run `dotnet watch` on the `server` directory.

It should install the dependencies and just run.

If not, be sure to install the dependencies manually, running `yarn` on the client and `dotnet build` on the server.
