import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as styles from "./Schedule.module.css";

import ButtonIcon from "../../Utility/ButtonIcon/ButtonIcon";

import { ArrowLeft, ArrowRight } from "../../Utility/Icons";

import { fetchSchedule } from "../../../store/actions";

const Schedule = ({ schedule, fetchSchedule, token }) => {
  useEffect(() => {
    if (!schedule) {
      fetchSchedule(token);
    }
  }, [schedule, fetchSchedule, token]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.selected}>Ponedeljak, 16. Novembar</h3>
        <div className={styles.calendar}>
          <div className={styles.day}>
            <p className={styles.weekday}>ned</p>
            <p className={styles.date}>15</p>
          </div>
          <div className={[styles.day, styles.active].join(" ")}>
            <p className={styles.weekday}>pon</p>
            <p className={styles.date}>16</p>
          </div>
          <div className={styles.day}>
            <p className={styles.weekday}>uto</p>
            <p className={styles.date}>17</p>
          </div>
          <div className={styles.day}>
            <p className={styles.weekday}>sre</p>
            <p className={styles.date}>18</p>
          </div>
          <div className={styles.day}>
            <p className={styles.weekday}>čet</p>
            <p className={styles.date}>19</p>
          </div>
          <div className={styles.day}>
            <p className={styles.weekday}>pet</p>
            <p className={styles.date}>20</p>
          </div>
          <div className={styles.day}>
            <p className={styles.weekday}>sub</p>
            <p className={styles.date}>21</p>
          </div>
        </div>
      </header>
      <main className={styles.court}>
        <div className={styles.select}>
          <ButtonIcon>
            <ArrowLeft />
          </ButtonIcon>
          <p className={styles.where}>Teren 1</p>
          <ButtonIcon>
            <ArrowRight />
          </ButtonIcon>
        </div>
        <div className={styles.schedule}>
          <div className={styles.free}>
            <p className={styles.text}>Slobodan teren</p>
            <div className={styles.time}>
              <p className={styles.start}>07.00</p>
              <p className={styles.finish}>09.00</p>
            </div>
          </div>
          <div className={styles.free}>
            <p className={styles.text}>Slobodan teren</p>
            <div className={styles.time}>
              <p className={styles.start}>09.00</p>
              <p className={styles.finish}>11.00</p>
            </div>
          </div>
          <div className={styles.free}>
            <p className={styles.text}>Slobodan teren</p>
            <div className={styles.time}>
              <p className={styles.start}>11.00</p>
              <p className={styles.finish}>13.00</p>
            </div>
          </div>
          <div className={styles.taken}>
            <p className={styles.text}>Zauzet teren</p>
            <div className={styles.time}>
              <p className={styles.start}>13.00</p>
              <p className={styles.finish}>15.00</p>
            </div>
          </div>
          <div className={styles.free}>
            <p className={styles.text}>Slobodan teren</p>
            <div className={styles.time}>
              <p className={styles.start}>15.00</p>
              <p className={styles.finish}>16.30</p>
            </div>
          </div>
          <div className={styles.taken}>
            <p className={styles.text}>Zauzet teren</p>
            <div className={styles.time}>
              <p className={styles.start}>16.30</p>
              <p className={styles.finish}>18.00</p>
            </div>
          </div>
          <div className={styles.taken}>
            <p className={styles.text}>Zauzet teren</p>
            <div className={styles.time}>
              <p className={styles.start}>18.00</p>
              <p className={styles.finish}>19.30</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
  token: state.auth.token,
});

export default connect(mapStateToProps, { fetchSchedule })(Schedule);
