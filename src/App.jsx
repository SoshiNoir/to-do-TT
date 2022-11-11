import React from "react";
import { Header } from "./components/Header";
import "./global.css";

import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
