import { useState } from "react";
import s from "./styles.module.css";
import {
  selectUser,
  selecSendMessage,
  selecInRoom,
} from "../../store/slices/mainSlice";
import { useAppSelector } from "../../store/hook";
import InputText from "../InputText";
import Button from "../Button";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const sendMessage = useAppSelector(selecSendMessage);
  const user = useAppSelector(selectUser);
  const inRoom = useAppSelector(selecInRoom);

  const handleSubmit = (message: string) => {
    sendMessage &&
      sendMessage(inRoom, {
        body: message,
        user: user,
        date: new Date().toISOString(),
      });
    setMessage("");
  };

  return (
    <div className={s.SendMessage}>
      <InputText
        value={message}
        onChange={setMessage}
        placeholder="Escribe tu mensaje"
      />
      <Button value="enviar" fn={() => handleSubmit(message)} />
    </div>
  );
};

export default SendMessage;
