import s from "./styles.module.css";

interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={s.InputText}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputText;
