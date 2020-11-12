import React from "react";

import * as styles from "./FormPage.module.css";

import RegisterForm from "../Forms/RegisterForm";
import Logo from "../Utility/Logo/Logo";
import InlineLink from "../Utility/InlineLink/InlineLink";

const Register = () => {
  return (
    <main className="App">
      <div className={styles.banner}>
        <h2 className={styles.header}>
          Postanite član <Logo />
        </h2>
        <p className={styles.already}>
          Već imate nalog?{" "}
          <InlineLink href="/auth/login">Ulogujte se</InlineLink>.
        </p>
      </div>
      <RegisterForm />
    </main>
  );
};

export default Register;
