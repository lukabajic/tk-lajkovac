import React, { useState } from "react";
import { connect } from "react-redux";

import * as styles from "./PleaseVerify.module.css";

import Button from "../../../Utility/Button/Button";

import { resendVerify } from "../../../../store/actions";

const PleaseVerify = ({ token, resendVerify }) => {
  const sendAgain = () => {
    resendVerify(token);
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
      <Button fluid primary clicked={sendAgain}>
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

const mapStateToProps = (state) => ({ token: state.auth.token });

export default connect(mapStateToProps, { resendVerify })(PleaseVerify);
