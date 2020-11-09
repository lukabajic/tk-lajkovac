import React from "react";

import * as styles from "./Index.module.css";

import Logo from "../../Utility/Logo/Logo";
import Button from "../../Utility/Button/Button";

const Index = () => (
  <main className="App">
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
    <div className={styles.buttons}>
      <Button fluid primary href="/auth/login">
        Ulogujte se
      </Button>
      <Button fluid secondary href="/auth/register">
        Registrujte se
      </Button>
    </div>
  </main>
);

export default Index;
