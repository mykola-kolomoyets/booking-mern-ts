import React from "react";
import cn from "classnames";

import Featured from "../../components/featured";
import PropertyList from "../../components/property-list";

import styles from "./home.module.scss";
import LovedList from "../../components/loved";

const Home = () => {
  return (
    <article className={styles.home}>
      <section className={styles.home__container}>
        <section className={styles.home__featured}>
          <Featured />
        </section>

        <section className={styles.home__property}>
          <h2 className={cn(styles.home__property_title, styles.title)}>
            Browse by property type
          </h2>

          <PropertyList />
        </section>

        <section className={styles.home__love}>
          <h2 className={cn(styles.home__love_title, styles.title)}>
            Homes guests love
          </h2>

          <LovedList />
        </section>
      </section>
    </article>
  );
};

export default Home;
