import React from "react";

import * as styles from "./FormPage.module.css";

import LoginForm from "../Forms/LoginForm";
import Logo from "../Utility/Logo/Logo";
import InlineLink from "../Utility/InlineLink/InlineLink";

const Login = () => {
  return (
    <main className="App">
      <div className={styles.banner}>
        <h2 className={styles.header}>
          Ulogujte se na <Logo />
        </h2>
        <p className={styles.already}>
          Niste član još uvek?{" "}
          <InlineLink href="/auth/register">Registrujte se</InlineLink>.
        </p>
      </div>
      <LoginForm />
    </main>
  );
};

export default Login;
