import React from "react";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__lists}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>Countries</li>
            <li className={styles.footer__list_item}>Regions</li>
            <li className={styles.footer__list_item}>Cities</li>
            <li className={styles.footer__list_item}>Districts</li>
            <li className={styles.footer__list_item}>Airports</li>
            <li className={styles.footer__list_item}>Hotels</li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>Homes </li>
            <li className={styles.footer__list_item}>Apartments </li>
            <li className={styles.footer__list_item}>Resorts </li>
            <li className={styles.footer__list_item}>Villas</li>
            <li className={styles.footer__list_item}>Hostels</li>
            <li className={styles.footer__list_item}>Guest houses</li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>Unique places to stay </li>
            <li className={styles.footer__list_item}>Reviews</li>
            <li className={styles.footer__list_item}>
              Unpacked: Travel articles{" "}
            </li>
            <li className={styles.footer__list_item}>Travel communities </li>
            <li className={styles.footer__list_item}>
              Seasonal and holiday deals{" "}
            </li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>Car rental </li>
            <li className={styles.footer__list_item}>Flight Finder</li>
            <li className={styles.footer__list_item}>
              Restaurant reservations{" "}
            </li>
            <li className={styles.footer__list_item}>Travel Agents </li>
          </ul>

          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>Curtomer Service</li>
            <li className={styles.footer__list_item}>Partner Help</li>
            <li className={styles.footer__list_item}>Careers</li>
            <li className={styles.footer__list_item}>Sustainability</li>
            <li className={styles.footer__list_item}>Press center</li>
            <li className={styles.footer__list_item}>Safety Resource Center</li>
            <li className={styles.footer__list_item}>Investor relations</li>
            <li className={styles.footer__list_item}>Terms & conditions</li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        Copyright © 2022 - {new Date().getFullYear()} MastemaBooking.
      </div>
    </footer>
  );
};

export default Footer;
