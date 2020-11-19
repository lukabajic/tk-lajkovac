import React from "react";
import { connect } from "react-redux";

import * as styles from "./ScheduleBody.module.css";

import ScheduleTime from "./ScheduleTime/ScheduleTime";
import ButtonIcon from "../../../Utility/ButtonIcon/ButtonIcon";

import { ArrowLeft, ArrowRight } from "../../../Utility/Icons";

const ScheduleBody = ({ selected, prevCourt, nextCourt, schedule }) => {
  const days = ["today", "tomorrow", "dayAfter"];

  const renderSchedule = () => {
    if (!schedule) {
      return;
    }

    const day = schedule[days[selected.day]];
    const court = day.courts[selected.court];

    return court.map((time) => <ScheduleTime key={time.start} {...time} />);
  };

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

const mapStateToProps = (state) => ({ schedule: state.schedule.schedule });

export default connect(mapStateToProps)(ScheduleBody);
