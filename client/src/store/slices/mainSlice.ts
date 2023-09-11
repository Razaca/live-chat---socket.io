import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainState } from "../store";

export interface User {
  name: string | null;
  id: string;
  color: string;
}

export interface Message {
  body: string;
  user: User | null;
  date: string | null;
}

export interface InitialState {
  name: string;
  user: User | null;
  usersOn: Array<User>;
  messages: Array<Message>;
  rooms: Array<string>;
  inRoom: string;
  joinRoom: ((username: string) => void) | null;
  sendMessage: ((roomName: string, message: Message) => void) | null;
  changeRoom: ((room: string) => void) | null;
}

const initialState: InitialState = {
  name: "",
  user: null,
  usersOn: [],
  messages: [],
  rooms: [],
  inRoom: "",
  joinRoom: null,
  sendMessage: null,
  changeRoom: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUsersOn: (state, action: PayloadAction<User[]>) => {
      state.usersOn = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    setRooms: (state, action: PayloadAction<string[]>) => {
      state.rooms = action.payload;
    },
    setInRoom: (state, action: PayloadAction<string>) => {
      state.inRoom = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setJoinRoom: (state, action: PayloadAction<(username: string) => void>) => {
      state.joinRoom = action.payload;
    },
    setSendMessage: (
      state,
      action: PayloadAction<(roomName: string, message: Message) => void>
    ) => {
      state.sendMessage = action.payload;
    },
    setChangeRoom: (state, action: PayloadAction<(room: string) => void>) => {
      state.changeRoom = action.payload;
    },
  },
});

export const {
  changeName,
  setUsersOn,
  setMessages,
  setRooms,
  setInRoom,
  setUser,
  setJoinRoom,
  setSendMessage,
  setChangeRoom,
} = mainSlice.actions;

export const selectName = (state: MainState) => state.main.name;
export const selectUsersOn = (state: MainState) => state.main.usersOn;
export const selectMessages = (state: MainState) => state.main.messages;
export const selecRooms = (state: MainState) => state.main.rooms;
export const selecInRoom = (state: MainState) => state.main.inRoom;
export const selectUser = (state: MainState) => state.main.user;
export const selecJoinRoom = (state: MainState) => state.main.joinRoom;
export const selecSendMessage = (state: MainState) => state.main.sendMessage;
export const selecChangeRoom = (state: MainState) => state.main.changeRoom;

export default mainSlice.reducer;
