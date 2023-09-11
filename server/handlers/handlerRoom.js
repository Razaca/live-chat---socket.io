export const handlerRoom = (io, socket, messages) => {
  socket.on("changeRoom", (room) => {
    socket.join(room);
    io.to(socket.id).emit("message", { messages: messages[room] });
  });
};
