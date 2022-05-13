import React, { FC } from "react";

import styles from "./../featured.module.scss";

export type FeaturedItemProps = {
  img: string;
  title: string;
  subtitle: string;
};

const FeaturedItem: FC<FeaturedItemProps> = ({ img, title, subtitle }) => (
  <div className={styles.featured__item}>
    <img className={styles.featured__item_img} src={img} alt={title} />

    <div className={styles.featured__item_titles}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </div>
  </div>
);

export default FeaturedItem;
