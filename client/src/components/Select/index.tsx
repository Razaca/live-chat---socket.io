import { useState } from "react";
import s from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  selecRooms,
  selecInRoom,
  setInRoom,
  selecChangeRoom,
} from "../../store/slices/mainSlice";

const Select = () => {
  const [isOpen, setIsOpen] = useState(true);
  const rooms = useAppSelector(selecRooms);
  const inRoom = useAppSelector(selecInRoom);
  const changeRoom = useAppSelector(selecChangeRoom);
  const dispatch = useAppDispatch();

  const handleRoom = (room: string) => {
    changeRoom && changeRoom(room)
    dispatch(setInRoom(room));
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.Select}>
      <span className={s.selectTop} onClick={() => setIsOpen(!isOpen)}>
        {inRoom}
      </span>
      {rooms
        ?.filter((el) => el !== inRoom)
        .map((sala, i) => (
          <span
            className={s.sala}
            key={i}
            style={{
              top: isOpen ? `${(i + 1) * 5}px` : `${(i + 1) * 35}px`,
              background: `hsl(${(i + 18) * 15}, 70%, 50%)`,
              width: `${200 - (i + 1) * 15}px`,
              zIndex: `${10 - i}`,
            }}
            onClick={() => handleRoom(sala)}
          >
            {sala}
          </span>
        ))}
    </div>
  );
};

export default Select;
