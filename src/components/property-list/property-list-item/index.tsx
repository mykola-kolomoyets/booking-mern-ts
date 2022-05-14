import React, { FC } from "react";

import styles from "./../property-list.module.scss";

export type PropertyListItemProps = {
  img: string;
  title: string;
  hotels: number;
};

const PropertyListItem: FC<PropertyListItemProps> = ({
  img,
  title,
  hotels
}) => {
  return (
    <div className={styles.property_list__item}>
      <img className={styles.property_list__img} src={img} alt={title} />

      <div className={styles.property_list__content}>
        <h3>{title}</h3>
        <h4>{hotels} hotels</h4>
      </div>
    </div>
  );
};

export default PropertyListItem;
