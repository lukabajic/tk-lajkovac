import React from "react";

import * as styles from "./App.module.css";

import Logo from "./Utility/Logo/Logo";

const App = () => {
  return (
    <main className={styles.app}>
      <h1 className={styles.header}>
        <Logo />
        Zakazivanje termina.
        <br />
        Online, besplatno.
      </h1>
      <p className={styles.paragraph}>
        <span className={styles.strong}>tklajkovac.rs</span> je zvanična web
        aplikacija teniskog kluba Lajkovac, uz pomoć koje možete pronaći kontakt
        drugih članova i zakazati meč.
      </p>
    </main>
  );
};

export default App;
