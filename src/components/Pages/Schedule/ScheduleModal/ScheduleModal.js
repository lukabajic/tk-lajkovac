import React from "react";
import ReactDOM from "react-dom";

import * as styles from "./ScheduleModal.module.css";

import Backdrop from "../../../Utility/Backdrop/Backdrop";
import Button from "../../../Utility/Button/Button";

import getDate from "../../../Utility/getDate";

const ScheduleModal = ({ data, selected, closeModal }) => {
  const days = ["Danas", "Sutra", "Prekosutra"];

  const modal = (
    <Backdrop clicked={closeModal}>
      <div className={styles.wrapper}>
        <h2 className={styles.text}>Zakazite termin</h2>
        <p className={styles.text}>
          {days[selected.day]}. {getDate(selected.day).string}.
        </p>
        <p className={styles.text}>
          Na terenu broj {selected.court}, od {data.start.slice(0, 2)}
          <sup>{data.start.slice(2, 4)}</sup> do {data.end.slice(0, 2)}
          <sup>{data.end.slice(2, 4)}</sup>.
        </p>
        <div className={styles.buttons}>
          <Button fluid primary>
            Zakazi
          </Button>
          <Button fluid secondary clicked={closeModal}>
            Izadji
          </Button>
        </div>
      </div>
    </Backdrop>
  );

  return ReactDOM.createPortal(
    modal,
    document.getElementById("schedule-modal")
  );
};

/**
 * required props
 *

 * court number
 * closeModal
 * makeappointment
 */

export default ScheduleModal;
