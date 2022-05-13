import React from "react";
import Featured from "../../components/featured";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <article className={styles.home}>
      <section className={styles.home__container}>
        <section className={styles.home__featured}>
          <Featured />
        </section>

        <section className={styles.home__property}>
          <h2 className={styles.home__property_title}>
            Browse by property type
          </h2>
        </section>
      </section>
    </article>
  );
};

export default Home;
