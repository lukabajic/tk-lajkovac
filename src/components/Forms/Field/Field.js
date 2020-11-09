import React from "react";

import * as styles from "./Field.module.css";

const Field = ({
  name,
  label,
  placeholder,
  type,
  meta,
  value,
  onChange,
  onBlur,
  autoFocus,
}) => {
  const requiredStyles = [styles.required];
  meta.touched && meta.error && requiredStyles.push(styles.error);

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoFocus={autoFocus}
        />
        <span className={requiredStyles.join(" ")}>
          <i aria-hidden className="fas fa-star-of-life"></i>
        </span>
      </div>
      {meta.touched && meta.error && (
        <span className={styles.error__text}>{meta.error}</span>
      )}
    </div>
  );
};

export default Field;
