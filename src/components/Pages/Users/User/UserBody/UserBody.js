import React from "react";
import { connect } from "react-redux";

import * as styles from "./UserBody.module.css";

const UserBody = ({ data, active, showThird }) => {
  const bodyStyles = [styles.body];
  active && bodyStyles.push(styles.active);

  const today = data.scheduled[0];
  const tomorrow = data.scheduled[1];
  const dayAfter = data.scheduled[2];

  const renderAppointments = (day) => (
    <span className={day ? styles.not : styles.free}>
      {!day ? (
        "Nema"
      ) : (
        <>
          {day.time.slice(0, 2)}
          <sup>{day.time.slice(2, 4)}</sup>
        </>
      )}
    </span>
  );

  return (
    <div className={bodyStyles.join(" ")}>
      <div className={styles.data}>
        <h4>Broj telefona:</h4>
        <span>{data.phone}</span>
      </div>
      <div className={styles.data}>
        <h4>Kategorija:</h4>
        <span>{data.category}</span>
      </div>
      <h4>Zakazani termini</h4>
      <div className={styles.wrapper}>
        <div className={styles.schedule}>
          Danas: {renderAppointments(today)}
        </div>
        <div className={styles.schedule}>
          Sutra: {renderAppointments(tomorrow)}
        </div>
        {showThird && (
          <div className={styles.schedule}>
            Prekosutra: {renderAppointments(dayAfter)}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showThird: state.user && (state.user.isAdmin || state.user.isPremium),
});

export default connect(mapStateToProps)(UserBody);
