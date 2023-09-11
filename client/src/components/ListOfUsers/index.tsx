import s from "./styles.module.css";
import { useAppSelector } from "../../store/hook";
import { selectUsersOn, User } from "../../store/slices/mainSlice";
import UserCard from "../UserCard";

const ListOfUsers = () => {
  const usersOn = useAppSelector(selectUsersOn);

  return (
    <div className={s.ListOfUsers}>
      Usuarios en linea:
      <div>
        {usersOn.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ListOfUsers;
