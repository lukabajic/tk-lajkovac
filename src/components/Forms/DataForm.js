import React, { useState } from "react";
import { connect } from "react-redux";

import * as styles from "./Form.module.css";

import Field from "./Field/Field";
import Button from "../Utility/Button/Button";

import { updateData } from "../../store/actions";

const DataForm = ({ error, user, token, updateData }) => {
  const [form, setForm] = useState({
    anyTouched: false,
    values: {
      displayName: user && user.displayName,
      phone: user && user.phone,
    },
    fields: {
      displayName: {
        type: "text",
        label: "Ime i prezime",
        placeholder: "Novak Đoković",
        autoFocus: true,
        meta: {
          valid: false,
          touched: false,
          error: null,
        },
      },
      phone: {
        type: "text",
        label: "Broj telefona",
        placeholder: "063 982 0611",
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
      case "displayName":
        if (!value) {
          error = "Obavezno polje";
          valid = false;
        } else if (!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(value)) {
          error = "Unesite pravo ime i prezime";
          valid = false;
        }
        return { error, valid };
      case "phone":
        if (!value) {
          error = "Obavezno polje";
          valid = false;
        } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g) {
          error = "Unesite ispravan broj telefona";
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
    return form.fields.displayName.meta.valid && form.fields.phone.meta.valid;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const displayName = form.values.displayName;
    const phone = form.values.phone;

    updateData(token, displayName, phone);
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
      {error && <div className={styles.error__server}>{error}</div>}
      {renderedForm}
      <Button fluid primary type="submit" disabled={!isFormValid()}>
        Sačuvaj podatke
      </Button>
      <p className={styles.terms}>
        Vaš broj telefona će moći da vide ostali članovi kluba.
      </p>
    </form>
  );
};

const mapStateToProps = (state) => ({
  error: state.user.error,
  user: state.user.user,
  token: state.auth.token,
});

export default connect(mapStateToProps, { updateData })(DataForm);
