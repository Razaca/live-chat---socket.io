import { nameOfUsers } from "../helpers/nameOfUsers.js";

export const handlerDisconnect = (io, socket) => {
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");

    const dataToSend = {
      usersOn: nameOfUsers(Array.from(io.sockets.sockets)),
    };

    socket.broadcast.emit("updateUsers", dataToSend);
  });
};
