import s from "./styles.module.css";
import ListOfUsers from "../../components/ListOfUsers";
import Chat from "../../components/Chat";
import SendMessage from "../../components/SendMessage";

const Main = () => {
  return (
    <div className={s.main}>
      <ListOfUsers />
      <Chat />
      <SendMessage />
    </div>
  );
};

export default Main;
