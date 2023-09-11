export const handlerMessages = (io, socket, messages) => {
  socket.on("message", (message) => {
    messages[message.roomName].push(message.message);

    socket
      .to(message.roomName)
      .emit("message", { messages: messages[message.roomName] });
    socket.emit("message", { messages: messages[message.roomName] });
  });
};
