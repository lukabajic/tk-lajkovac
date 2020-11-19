import React from "react";
import { connect } from "react-redux";

import * as styles from "./ScheduleBody.module.css";

import ScheduleTime from "./ScheduleTime/ScheduleTime";
import ButtonIcon from "../../../Utility/ButtonIcon/ButtonIcon";
import Button from "../../../Utility/Button/Button";

import { ArrowLeft, ArrowRight } from "../../../Utility/Icons";

import { scheduleTime } from "../../../../store/actions";

const ScheduleBody = ({
  selected,
  prevCourt,
  nextCourt,
  schedule,
  openModal,
  user,
  token,
  scheduleTime,
}) => {
  const days = ["today", "tomorrow", "dayAfter"];

  const renderSchedule = () => {
    if (!schedule) {
      return;
    }

    const day = schedule[days[selected.day]];
    const court = day.courts[selected.court];

    return court.map((time) => (
      <ScheduleTime
        clicked={() => openModal(time)}
        key={time.start}
        {...time}
      />
    ));
  };

  if (user && user.scheduled && user.scheduled[selected.day]) {
    const { time, court } = user.scheduled[selected.day];

    return (
      <main className={styles.already}>
        <div className={styles.content}>
          <h3>
            Zakazan termin u {time.slice(0, 2)}
            <sup>{time.slice(2, 4)}</sup>.
          </h3>
          <h3>Na terenu: Broj {court}.</h3>
          <Button
            fluid
            secondary
            clicked={() =>
              scheduleTime(token, court, time, selected.day, "cancel")
            }
          >
            Otkazite<span className={styles.red}>*</span>
          </Button>
          <span>
            <span className={styles.red}>*</span>Napomena: Ukoliko otkazete
            termin imate pravo na zakazivanje termina jos samo jednom za isti
            dan. Budite pazljivi kada zakazujete.
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.court}>
      <div className={styles.select}>
        <ButtonIcon clicked={prevCourt}>
          <ArrowLeft />
        </ButtonIcon>
        <p className={styles.where}>Teren {selected.court}</p>
        <ButtonIcon clicked={nextCourt}>
          <ArrowRight />
        </ButtonIcon>
      </div>
      <div className={styles.schedule}>{renderSchedule()}</div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
  user: state.user.user,
  token: state.auth.token,
});

export default connect(mapStateToProps, { scheduleTime })(ScheduleBody);
