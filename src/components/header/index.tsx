import {
  faBed,
  faCar,
  faPlane,
  faTaxi
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import HeaderList from "./header-list";
import { HeaderListItemProps } from "./header-list-item";
import HeaderSearch from "./header-search";

import styles from "./header.module.scss";

const headerContent: HeaderListItemProps[] = [
  {
    title: "Stays",
    icon: faBed,
    isActive: true
  },
  {
    title: "Flights",
    icon: faPlane
  },
  {
    title: "Car rentals",
    icon: faCar
  },
  {
    title: "Attractions",
    icon: faBed
  },
  {
    title: "Airport taxis",
    icon: faTaxi
  }
];

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__container}>
        <HeaderList items={headerContent} />

        <h1 className={styles.header__title}>
          A lifetime of discounts? It`s Genius
        </h1>

        <p className={styles.header__description}>
          Get rewarded for your travels
        </p>

        <section className={styles.header__login}>
          <button className={styles.header__login_button}>
            Sign in/ register
          </button>
        </section>

        <HeaderSearch />
      </section>
    </header>
  );
};

export default Header;
