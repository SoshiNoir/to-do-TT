import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import "./global.css";

import styles from "./App.module.css";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <NewTask />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;