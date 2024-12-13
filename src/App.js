import { PasswordGeneratorCard } from "./components/passwordGeneratorCard/PasswordGeneratorCard";
import s from "./style.module.css";

function App() {
  return (
    <div className={s.root}>
      <PasswordGeneratorCard />
    </div>
  );
}

export default App;
