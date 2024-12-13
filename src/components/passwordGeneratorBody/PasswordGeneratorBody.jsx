import s from "./style.module.css";

export function PasswordGeneratorBody() {
  return (
    <form>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input type="checkbox" />
        </div>
        <div className={s.grid_item}>
          Lowercase
          <input type="checkbox" />
        </div>
        <div className={s.grid_item}>
          Specials
          <input type="checkbox" />
        </div>
      </div>
      <div className={s.btn_container}>
        <button className={s.btn_generator}>GENERATE</button>
      </div>
    </form>
  );
}
