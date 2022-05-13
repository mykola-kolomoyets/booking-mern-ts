import React from "react";
import {
  faBed,
  faCalendarDays,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./../header.module.scss";

const HeaderSearch = () => {
  return (
    <section className={styles.header__search}>
      <div className={styles.header__search_item}>
        <label htmlFor="destination" className={styles.header__input}>
          <FontAwesomeIcon className={styles.header__input_icon} icon={faBed} />

          <input
            className={styles.header__input_field}
            type="text"
            placeholder="Where are you going?"
            name="destination"
          />
        </label>
      </div>

      <div className={styles.header__search_item}>
        <label htmlFor="calendar" className={styles.header__input}>
          <FontAwesomeIcon
            className={styles.header__input_icon}
            icon={faCalendarDays}
          />

          <span className={styles.header__input_text}>date to date</span>
        </label>
      </div>

      <div className={styles.header__search_item}>
        <label htmlFor="destination" className={styles.header__input}>
          <FontAwesomeIcon
            className={styles.header__input_icon}
            icon={faPerson}
          />

          <span className={styles.header__input_text}>
            2 children, 2 adults, 1 room
          </span>
        </label>
      </div>

      <button className={styles.header__login_button}>Search</button>
    </section>
  );
};

export default HeaderSearch;
