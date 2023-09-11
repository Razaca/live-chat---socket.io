export const handlerMessages = (io, socket, messages) => {
  socket.on("message", (message) => {
    messages[message.roomName].push(message.message);

    socket
      .to(message.roomName)
      .emit("message", { messages: messages[message.roomName] });
    io.to(socket.id).emit("message", { messages: messages[message.roomName] });
  });
};
