import lock from "../../assets/icons/lock-icon.svg";
import s from "./style.module.css";

export function PasswordGeneratorHeader() {
  return (
    <div className={s.root}>
      <div className={s.title}>Password Generator</div>
      <img src={lock} className={s.icon} alt="Lock icon" />
    </div>
  );
}
