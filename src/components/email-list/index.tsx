import React from "react";

import styles from "./email-list.module.scss";

const EmailList = () => {
  return (
    <div className={styles.email}>
      <h2 className={styles.email__title}>Save time, save money!</h2>
      <p className={styles.email__subtitle}>
        Sign up and we`ll send the best deals to you
      </p>

      <form className={styles.email__input_container}>
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default EmailList;
