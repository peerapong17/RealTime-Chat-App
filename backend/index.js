const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:3001"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("sent_message", (data) => {
    io.emit("receive", data);
  });
  // when user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

httpServer.listen(3000);
