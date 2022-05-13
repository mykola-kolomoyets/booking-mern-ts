import React from "react";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <span className={styles.navbar__logo}>MastemaBooking</span>

        <div className={styles.navbar__items}>
          <button className={styles.navbar__button}>Register</button>
          <button className={styles.navbar__button}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
