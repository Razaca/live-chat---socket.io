export const nameOfUsers = (sockets) => {
  let users = [];
  sockets.forEach((socket) => {
    socket.forEach((el) => {
      el.id && users.push({ name: el.name, id: el.id, color: el.color });
    });
  });
  return users;
};
