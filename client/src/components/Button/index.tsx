import s from "./styles.module.css";

interface ButtonProps {
  value: string;
  fn: (...args: any) => void;
}

const Button: React.FC<ButtonProps> = ({ value, fn }) => {
  return (
    <button className={s.Button} onClick={() => fn()}>
      {value}
    </button>
  );
};

export default Button;
