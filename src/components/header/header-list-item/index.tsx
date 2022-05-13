import React, { FC, useEffect, useState } from "react";

import cn from "classnames";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./../header.module.scss";

export type HeaderListItemProps = {
  title: string;
  icon: IconDefinition;
  isActive?: boolean;
};

const HeaderListItem: FC<HeaderListItemProps> = ({ title, icon, isActive }) => {
  const listItemClasses = cn(styles.header__list_item, {
    [styles.active]: isActive
  });

  return (
    <div className={listItemClasses}>
      <FontAwesomeIcon icon={icon} />
      <span className={styles.header__list_item_title}>{title}</span>
    </div>
  );
};

export default HeaderListItem;
