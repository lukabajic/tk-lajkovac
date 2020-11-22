import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as styles from "./Users.module.css";

import User from "./User/User";

import { fetchAllUsers } from "../../../store/actions";

const Users = ({ users, token, fetchAllUsers }) => {
  useEffect(() => {
    if (!users) {
      fetchAllUsers(token);
    }
  }, [users, fetchAllUsers, token]);

  const [selected, setSelected] = useState(null);

  const renderUsers = () => {
    if (!users) {
      return;
    }

    return users.map((user) => (
      <User
        key={user.userId}
        data={user}
        selected={selected && selected.userId === user.userId}
        select={() => setSelected(user)}
        diselect={() => setSelected(null)}
      />
    ));
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h3>Svi članovi</h3>
      </header>
      <main className={styles.body}>{renderUsers()}</main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  token: state.auth.token,
});

export default connect(mapStateToProps, { fetchAllUsers })(Users);
