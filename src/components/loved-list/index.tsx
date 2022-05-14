import React from "react";

import LovedListItem, { LovedListItemProps } from "./loved-item";

import styles from "./loved.module.scss";

const lovedList: LovedListItemProps[] = [
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
    title: "Aparthotel Stare Miasto",
    city: "Madrid",
    startPrice: 120,
    rating: 8.9
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
    title: "Comfort Suites Airport",
    city: "Austin",
    startPrice: 140,
    rating: 9.3
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1",
    title: "Four Seasons Hotel",
    city: "Lisbon",
    startPrice: 99,
    rating: 8.8
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
    title: "Hilton Garden Inn",
    city: "Berlin",
    startPrice: 105,
    rating: 8.9
  }
];

const LovedList = () => {
  return (
    <article className={styles.loved_list}>
      {lovedList.map((item) => (
        <LovedListItem {...item} />
      ))}
    </article>
  );
};

export default LovedList;
