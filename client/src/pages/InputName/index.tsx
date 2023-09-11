import { useState } from "react";
import { changeName, selecJoinRoom } from "../../store/slices/mainSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import InputText from "../../components/InputText";
import s from "./styles.module.css";
import Button from "../../components/Button";

const InputName = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();
  const joinRoom = useAppSelector(selecJoinRoom);

  const handleSubmit = () => {
    setInput("");
    dispatch(changeName(input));
    joinRoom && joinRoom(input);
  };

  return (
    <div className={s.form}>
      <InputText value={input} onChange={setInput} placeholder="Inserta tu nombre"/>
      <Button value="Entrar" fn={handleSubmit} />
    </div>
  );
};

export default InputName;
