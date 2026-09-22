
import { WebSocketServer } from "ws";
import { db } from "@repo/db";

const server = new WebSocketServer({ port: 3002 });

server.on("connection", async (socket) => {
  try {
    const user = await db.orm.public.User.create({
      username: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15),
    });
    socket.send(`New WebSocket connection established. User: ${user.id}`);
  } catch (err) {
    console.error(err);
    socket.send("Connection established, but user creation failed.");
  }
});

server.on("error", (err) => console.error("WebSocketServer error:", err));

console.log("ws-server on 3002");
