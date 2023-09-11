import { nameOfUsers } from "../helpers/nameOfUsers.js";

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#800000",
  "#008000",
  "#000080",
  "#808000",
  "#800080",
  "#008080",
  "#C0C0C0",
  "#808080",
  "#FFA500",
  "#FFC0CB",
  "#800000",
  "#008000",
  "#000080",
  "#808000",
  "#800080",
  "#008080",
  "#C0C0C0",
  "#808080",
  "#FFA500",
  "#FFC0CB",
];

export const handlerInit = (io, socket, messages, rooms) => {
  socket.on("init", (name) => {
    socket.name = name;
    socket.color = colors[Math.floor(Math.random() * colors.length)];

    socket.join(rooms[0]);
    socket.broadcast.emit("init", {
      usersOn: nameOfUsers(Array.from(io.sockets.sockets)),
    });
    socket.emit("init", {
      usersOn: nameOfUsers(Array.from(io.sockets.sockets)),
      user: { id: socket.id, name: socket.name, color: socket.color },
      messages: messages[rooms[0]],
      rooms: rooms,
    });
  });
};
