import React from "react";
import styles from "./styles.module.css";

import TDTTLogo from "../../assets/TDTT-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TDTTLogo} />
    </header>
  );
}
