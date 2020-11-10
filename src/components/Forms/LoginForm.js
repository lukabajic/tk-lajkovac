import React, { useState } from "react";

import * as styles from "./Form.module.css";

import Field from "./Field/Field";
import Button from "../Utility/Button/Button";
import InlineLink from "../Utility/InlineLink/InlineLink";

const LoginForm = () => {
  const [error, setError] = useState(); // will remove fast

  const [form, setForm] = useState({
    anyTouched: false,
    values: {
      email: "",
      password: "",
    },
    fields: {
      email: {
        type: "email",
        label: "Email",
        placeholder: "primer@gmail.com",
        autoFocus: true,
        meta: {
          valid: false,
          touched: false,
          error: null,
        },
      },
      password: {
        type: "password",
        label: "Lozinka",
        placeholder: "********",
        autoFocus: false,
        meta: {
          valid: false,
          touched: false,
          error: null,
        },
      },
    },
  });

  const validate = (field, value) => {
    let error = null;
    let valid = true;
    switch (field) {
      case "email":
        if (!value) {
          error = "Obavezno polje";
          valid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = "Nepravilna email adresa";
          valid = false;
        }
        return { error, valid };
      case "password":
        if (!value) {
          error = "Obavezno polje";
          valid = false;
        } else if (value.length < 8) {
          error = "Sifra treba da ima barem 8 karaktera";
          valid = false;
        }
        return { error, valid };
      case "confPassword":
        if (!value) {
          error = "Obavezno polje";
          valid = false;
        } else if (value !== form.values.password) {
          error = "Sifra bi trebalo da se poklapaju.";
          valid = false;
        }
        return { error, valid };
      default:
        return { error, valid };
    }
  };

  const onChangeHandler = (field, value) => {
    setForm({
      ...form,
      values: {
        ...form.values,
        [field]: value,
      },
      fields: {
        ...form.fields,
        [field]: {
          ...form.fields[field],
          meta: {
            ...form.fields[field].meta,
            valid: validate(field, value).valid,
            error: validate(field, value).error,
          },
        },
      },
    });
  };

  const onBlurHandler = (field, value) => {
    setForm({
      ...form,
      anyTouched: true,
      fields: {
        ...form.fields,
        [field]: {
          ...form.fields[field],
          meta: {
            ...form.fields[field].meta,
            touched: true,
            valid: validate(field, value).valid,
            error: validate(field, value).error,
          },
        },
      },
    });
  };

  const isFormValid = () => {
    return form.fields.email.meta.valid && form.fields.password.meta.valid;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // dispatch action
    setForm({
      ...form,
      values: { email: "", password: "", confPassword: "" },
    });
  };

  const renderedForm = Object.keys(form.fields).map((field) => (
    <Field
      key={field}
      name={field}
      type={form.fields[field].type}
      label={form.fields[field].label}
      placeholder={form.fields[field].placeholder}
      meta={form.fields[field].meta}
      onChange={(e) => onChangeHandler(field, e.target.value)}
      onBlur={(e) => onBlurHandler(field, e.target.value)}
      value={form.values[field]}
      autoFocus={form.fields[field].autoFocus ? true : false}
    />
  ));

  return (
    <form
      className={styles.form}
      noValidate
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      {error && (
        <div className={styles.error__server}>
          <span className={styles.error__num}>{error.status}: </span>
          {error.error}
        </div>
      )}
      {renderedForm}
      <Button fluid primary type="submit" disabled={!isFormValid()}>
        Uloguj se
      </Button>
      <p className={styles.terms}>
        Zaboravili ste lozinku? <InlineLink href="/">Restartuj</InlineLink>.
      </p>
    </form>
  );
};

export default LoginForm;
