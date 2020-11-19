import React from "react";

import * as styles from "./ScheduleTime.module.css";

const ScheduleTime = ({ taken, start, end, clicked }) => {
  return (
    <button
      className={!taken ? styles.free : styles.taken}
      disabled={taken}
      onClick={clicked}
    >
      <p className={styles.text}>
        {!taken ? "Slobodan teren" : "Zauzet teren"}
      </p>
      <div className={styles.time}>
        <p className={styles.start}>
          {start.slice(0, 2)}
          <sup>{start.slice(2, 4)}</sup>
        </p>
        <p className={styles.finish}>
          {end.slice(0, 2)}
          <sup>{end.slice(2, 4)}</sup>
        </p>
      </div>
    </button>
  );
};

export default ScheduleTime;
