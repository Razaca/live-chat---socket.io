import { User } from "../../store/slices/mainSlice";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <span style={{ color: user.color, margin: "1px 5px" }}>
      {user.name ? user.name : user.id}
    </span>
  );
};

export default UserCard;
