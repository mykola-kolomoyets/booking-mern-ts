import React, { FC } from "react";
import HeaderListItem, { HeaderListItemProps } from "../header-list-item";

import styles from "./../header.module.scss";

export type HeaderListProps = {
  items: HeaderListItemProps[];
};

const HeaderList: FC<HeaderListProps> = ({ items }) => {
  return (
    <section className={styles.header__list}>
      {items.map((item) => (
        <HeaderListItem {...item} />
      ))}
    </section>
  );
};

export default HeaderList;
