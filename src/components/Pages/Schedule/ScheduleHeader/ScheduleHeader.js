import React from "react";
import { connect } from "react-redux";

import * as styles from "./ScheduleHeader.module.css";

const ScheduleHeader = ({ selected, changeDay, isAdmin }) => {
  const weekDays = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Četvrtak",
    "Petak",
    "Subota",
  ];

  const months = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ];

  const days = ["danas", "sutra", "prekosutra"];
  !isAdmin && days.pop();

  const getDate = (num) => {
    const day = new Date(new Date().setDate(new Date().getDate() + num));

    const weekDay = weekDays[day.getDay()];
    const date = day.getDate();
    const month = months[day.getMonth()];

    return {
      weekDay,
      date,
      month,
      string: `${weekDay}, ${date}. ${month}`,
    };
  };

  const renderDays = () => {
    const calendarStyles = [styles.calendar];
    isAdmin && calendarStyles.push(styles.three);
    !isAdmin && calendarStyles.push(styles.two);

    return (
      <div className={calendarStyles.join(" ")}>
        {days.map((day, index) => {
          const stylesDay = [styles.day];
          index === selected.day && stylesDay.push(styles.active);
          return (
            <div
              className={stylesDay.join(" ")}
              key={day}
              onClick={() => changeDay(index)}
            >
              <p className={styles.weekday}>{getDate(index).weekDay}</p>
              <p className={styles.date}>{getDate(index).date}</p>
              <p className={styles.weekday}>{day}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <header className={styles.header}>
      <h3 className={styles.selected}>{getDate(selected.day).string}</h3>
      {renderDays()}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.user.user && state.user.user.isAdmin,
});

export default connect(mapStateToProps)(ScheduleHeader);
