import s from "./style.module.css";
import copyPaste from "../../assets/icons/copy-paste.svg";

export function PasswordGeneratorFooter() {
  return (
    <div className={s.root}>
      <div>Password Generator</div>
      <img src={copyPaste} className={s.img} />
    </div>
  );
}
