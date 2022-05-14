import React, { FC } from "react";
import { gatRatingStatus } from "../loved.utils";

import styles from "./../loved.module.scss";

export type LovedListItemProps = {
  img: string;
  title: string;
  city: string;
  startPrice: number;
  rating: number;
};

const LovedListItem: FC<LovedListItemProps> = ({
  img,
  title,
  city,
  startPrice,
  rating
}) => {
  return (
    <div className={styles.loved_list__item}>
      <img className={styles.loved_list__img} src={img} alt={title} />

      <div className={styles.loved_list__content}>
        <h3>{title}</h3>
        <h4>{city}</h4>
        <h4>Starting from ${startPrice}</h4>

        <div className={styles.loved_list__rating}>
          <button>{rating}</button>
          <span>{gatRatingStatus(rating)}</span>
        </div>
      </div>
    </div>
  );
};

export default LovedListItem;
