import React, { useRef, useEffect } from "react";

import * as styles from "./User.module.css";

import Backdrop from "../../../Utility/Backdrop/Backdrop";
import ButtonIcon from "../../../Utility/ButtonIcon/ButtonIcon";
import UserBody from "./UserBody/UserBody";

import { User as UserIcon, Close } from "../../../Utility/Icons";

const User = ({ data, select, selected, diselect }) => {
  const user = useRef();

  const userStyles = [styles.user];
  selected && userStyles.push(styles.active);

  useEffect(() => {
    user.current.style.top = `${user.current.offsetTop}px`;
    user.current.style.left = `${user.current.offsetLeft}px`;
  }, []);

  return (
    <>
      {selected && <Backdrop clicked={diselect} />}
      <div className={userStyles.join(" ")} onClick={select} ref={user}>
        <div className={styles.head}>
          <div className={styles.icon}>
            <UserIcon />
          </div>
          <h3 className={styles.text}>{data.displayName}</h3>
          {!selected ? (
            <p className={styles.category}>{data.category}</p>
          ) : (
            <ButtonIcon clicked={diselect}>
              <Close />
            </ButtonIcon>
          )}
        </div>
        {selected && <UserBody data={data} active={selected} />}
      </div>
    </>
  );
};

export default User;
