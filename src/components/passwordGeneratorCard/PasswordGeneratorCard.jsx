import { PasswordGeneratorBody } from "../passwordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../passwordGeneratorFooter/PasswordGeneratorFooter";
import { PasswordGeneratorHeader } from "../passwordGeneratorHeader/PasswordGeneratorHeader";

import s from "./style.module.css";

export function PasswordGeneratorCard() {
  return (
    <div className={s.root}>
      <div className={s.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody />
      </div>
      <PasswordGeneratorFooter />
    </div>
  );
}
