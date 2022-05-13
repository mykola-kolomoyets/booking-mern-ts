import {
  faBed,
  faCar,
  faPlane,
  faTaxi
} from "@fortawesome/free-solid-svg-icons";
import React, { FC, Fragment } from "react";
import cn from "classnames";

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

type HeaderProps = {
  isExtended?: boolean;
};

const Header: FC<HeaderProps> = ({ isExtended }) => {
  const containerClasses = cn(styles.header__container, {
    [styles.header__container_extended]: isExtended
  });

  return (
    <header className={styles.header}>
      <section className={containerClasses}>
        <HeaderList items={headerContent} />

        {isExtended && (
          <Fragment>
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
          </Fragment>
        )}
      </section>
    </header>
  );
};

export default Header;
