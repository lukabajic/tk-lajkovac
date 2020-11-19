import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as styles from "./Schedule.module.css";

import ScheduleHeader from "./ScheduleHeader/ScheduleHeader";
import ScheduleBody from "./ScheduleBody/ScheduleBody";
import ScheduleModal from "./ScheduleModal/ScheduleModal";

import { fetchSchedule } from "../../../store/actions";

const Schedule = ({ schedule, fetchSchedule, token }) => {
  useEffect(() => {
    if (!schedule) {
      fetchSchedule(token);
    }
  }, [schedule, fetchSchedule, token]);

  const [selected, setSelected] = useState({
    day: 0,
    court: 1,
  });

  const [modal, setModal] = useState(null);

  const changeDay = (index) => {
    setSelected({
      ...selected,
      day: index,
    });
  };

  const nextCourt = () => {
    setSelected({
      ...selected,
      court: selected.court < 3 ? selected.court + 1 : 1,
    });
  };

  const prevCourt = () => {
    setSelected({
      ...selected,
      court: selected.court > 1 ? selected.court - 1 : 3,
    });
  };

  const openModal = (data) => {
    setModal({ start: data.start, end: data.end });
  };

  return (
    <div className={styles.wrapper}>
      {modal && (
        <ScheduleModal
          selected={selected}
          data={modal}
          closeModal={() => setModal(null)}
        />
      )}
      <ScheduleHeader selected={selected} changeDay={changeDay} />
      <ScheduleBody
        selected={selected}
        prevCourt={prevCourt}
        nextCourt={nextCourt}
        openModal={openModal}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
  token: state.auth.token,
});

export default connect(mapStateToProps, { fetchSchedule })(Schedule);
