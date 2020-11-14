import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as styles from "./SidebarToggler.module.css";

import { sidebarToggle } from "../../../store/actions";

const SidebarToggler = ({ sidebarToggle }) => {
  const [buttonStyles, setButtonStyles] = useState([styles.wrapper]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        if (buttonStyles.length === 1) {
          setButtonStyles([styles.wrapper, styles.scrolled]);
        }
      } else {
        setButtonStyles([styles.wrapper]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button onClick={sidebarToggle} className={buttonStyles.join(" ")}>
      <svg viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M80 160h352M80 256h352M80 352h352"
        />
      </svg>
    </button>
  );
};

export default connect(null, { sidebarToggle })(SidebarToggler);
