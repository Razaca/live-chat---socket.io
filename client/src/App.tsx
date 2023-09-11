import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  selectName,
  setChangeRoom,
  setJoinRoom,
  setSendMessage,
} from "./store/slices/mainSlice";
import { useAppSelector, useAppDispatch } from "./store/hook";
import useSocket from "./hooks/useSocket";

import InputName from "./pages/InputName";
import Main from "./pages/Main";

function App() {
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  const { joinRoom, sendMessage, changeRoom } = useSocket(
    "https://chat-socket-io-lnrq.onrender.com"
    //"http://localhost:3000"
  );

  dispatch(setJoinRoom(joinRoom));
  dispatch(setSendMessage(sendMessage));
  dispatch(setSendMessage(sendMessage));
  dispatch(setChangeRoom(changeRoom));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={!name ? <InputName /> : <Main />} />
        <Route path="/about" element={<>about</>} />
      </Routes>
    </div>
  );
}

export default App;
