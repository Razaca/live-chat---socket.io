import express from "express";
import http from "http";
import { Server as Socket } from "socket.io";

import { handlerDisconnect } from "./handlers/disconnect.js";
import { handlerInit } from "./handlers/handlerInit.js";
import { handlerMessages } from "./handlers/handlerMessages.js";
import { handlerRoom } from "./handlers/handlerRoom.js";

const app = express();
const server = http.createServer(app);

const io = new Socket(server, {
  cors: { origin: "*" },
});

let messages = {
  principal: [],
  juegos: [],
  musica: [],
  amigos: [],
};

let rooms = Object.keys(messages);

io.on("connection", (socket) => {
  console.log("welcome:", socket.id);

  handlerInit(io, socket, messages, rooms);
  handlerRoom(io, socket, messages);
  handlerMessages(io, socket, messages);
  handlerDisconnect(io, socket);
});

server.listen(3000, () => console.log("Server is running"));
