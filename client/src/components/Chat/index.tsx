import s from "./styles.module.css";
import { useAppSelector } from "../../store/hook";
import { selectMessages, Message } from "../../store/slices/mainSlice";
import Select from "../Select";

const Chat = () => {
  const messages = useAppSelector(selectMessages);

  return (
    <div className={s.Chat}>
      <div className={s.chatTop}>
        <Select />
      </div>
      <div className={s.messages}>
        <ul>
          {messages?.map((message: Message) => (
            <li key={message.date}>
              <span
                style={{
                  color: message.user?.color,
                  textDecoration: "underline",
                }}
              >
                {message.user?.name}
              </span>
              {":   "}
              {message.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
