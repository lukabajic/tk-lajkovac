import React from "react";

import * as styles from "./FormPage.module.css";

import DataForm from "../Forms/DataForm";

const Data = () => {
  return (
    <main className="App">
      <div className={styles.banner}>
        <h2 className={styles.header}>Unesite vaše podatke.</h2>
        <p className={styles.already}>Ovo je poslednji korak registracije.</p>
      </div>
      <DataForm />
    </main>
  );
};

export default Data;
