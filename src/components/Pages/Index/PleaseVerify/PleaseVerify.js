import React, { useState } from "react";

import * as styles from "./PleaseVerify.module.css";

import Button from "../../../Utility/Button/Button";

const PleaseVerify = () => {
  const [disabled, setDisabled] = useState(false);

  const sendAgain = () => {
    // dispatch action
    setDisabled(true);
  };

  return (
    <main className="App">
      <div className={styles.banner}>
        <h2 className={styles.header}>Potvrdite vaš email.</h2>
        <p>
          Poslali smo mejl na adresu koju ste nam pružili. Molim vas,{" "}
          <span className={styles.color}>kliknite na link</span> u mejlu.
        </p>
      </div>
      <Button fluid primary clicked={sendAgain} disabled={disabled}>
        Pošaljite ponovo
      </Button>
      <p className={styles.already}>
        Ovaj proces može da potraje nekoliko minuta. Sačekajte pre nego što
        pošaljete ponovo. Takodje, proverite spam i promo foldere na vašem
        mejlu.
      </p>
    </main>
  );
};

export default PleaseVerify;
