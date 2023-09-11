import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import {
  setUsersOn,
  setMessages,
  setUser,
  Message,
  setRooms,
  setInRoom,
} from "../store/slices/mainSlice.js";
import { useAppDispatch } from "../store/hook";

const useSocket = (serverUrl: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socketInstance = io(serverUrl);

    // Establece el socket en el estado
    setSocket(socketInstance);

    socketInstance.on("init", (data) => {
      console.log("init: ", data.usersOn);
      dispatch(setUsersOn(data.usersOn));
      data.messages && dispatch(setMessages(data.messages));
      data.user && dispatch(setUser(data.user));
      data.rooms && dispatch(setRooms(data.rooms));
      data.rooms && dispatch(setInRoom(data.rooms[0]));
    });

    socketInstance.on("changeRoom", (data) => {
      console.log("changeRoom: ", data);
      data.messages && dispatch(setMessages(data.messages));
    });

    socketInstance.on("message", (data) => {
      console.log("message :", data);
      dispatch(setMessages(data.messages));
    });

    socketInstance.on("updateUsers", (data) => {
      console.log("updateUsers: ", data);
      dispatch(setUsersOn(data.usersOn));
    });

    // Cierra la conexión del socket cuando el componente se desmonta
    return () => {
      socketInstance.disconnect();
    };
  }, [dispatch, serverUrl]);

  // Función para unirse a una sala
  const joinRoom = (username: string) => {
    if (socket) {
      socket.emit("init", username);
    }
  };

  // Función para enviar un mensaje
  const sendMessage = (roomName: string, message: Message) => {
    if (socket) {
      console.log("sendMessage: ", roomName, message);
      socket.emit("message", { roomName, message });
    }
  };

  const changeRoom = (roomName: string) => {
    if (socket) {
      socket.emit("changeRoom", roomName);
    }
  };

  return {
    socket,
    joinRoom,
    changeRoom,
    sendMessage,
  };
};

export default useSocket;
