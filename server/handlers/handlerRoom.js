export const handlerRoom = (io, socket, messages) => {
  socket.on("changeRoom", (room) => {
    socket.join(room);
    socket.emit("message", { messages: messages[room] });
  });
};
