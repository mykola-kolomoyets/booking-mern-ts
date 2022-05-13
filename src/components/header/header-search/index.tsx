import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import styles from "./../header.module.scss";
import {
  BookingOptions,
  capitalize,
  formatDate,
  isPlural
} from "./header-search.utils";

const HeaderSearch = () => {
  const [isDateOpened, setIsDateOpened] = useState(false);
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);

  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  const [options, setOptions] = useState<BookingOptions>({
    adults: 1,
    children: 1,
    rooms: 1
  });

  const onDateToggle = () => setIsDateOpened((prev) => !prev);

  const onOptionChange = (
    field: keyof typeof options,
    isIncrement: boolean
  ) => {
    setOptions((prev) => ({
      ...prev,
      [field]: isIncrement ? prev[field] + 1 : prev[field] - 1
    }));
  };

  const onOptionsToggle = () => setIsOptionsOpened((prev) => !prev);

  return (
    <section className={styles.header__search}>
      <div className={styles.header__search_item}>
        <label htmlFor="destination" className={styles.header__input}>
          <FontAwesomeIcon className={styles.header__input_icon} icon={faBed} />

          <input
            className={styles.header__input_field}
            type="text"
            placeholder="Where are you going?"
            name="destination"
          />
        </label>
      </div>

      <div className={styles.header__search_item}>
        <label htmlFor="calendar" className={styles.header__input}>
          <FontAwesomeIcon
            className={styles.header__input_icon}
            icon={faCalendarDays}
          />

          <span className={styles.header__input_text} onClick={onDateToggle}>
            {`${formatDate(date[0].startDate!)}
              to
              ${formatDate(date[0].endDate!)}`}
          </span>

          {isDateOpened && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.header__input_date}
            />
          )}
        </label>
      </div>

      <div className={styles.header__search_item}>
        <label htmlFor="destination" className={styles.header__input}>
          <FontAwesomeIcon
            className={styles.header__input_icon}
            icon={faPerson}
          />

          <span className={styles.header__input_text} onClick={onOptionsToggle}>
            {`${options.adults} adult${isPlural(options.adults) ? "s" : ""} • 
							${options.children} ${isPlural(options.children) ? "children" : "kid"} • 
							${options.rooms} room${isPlural(options.rooms) ? "s" : ""}
						`}
          </span>

          {isOptionsOpened && (
            <div className={styles.header__input_options}>
              {Object.entries(options).map(([key, value]) => (
                <div className={styles.header__input_options_item}>
                  <span className={styles.header__input_options_item_title}>
                    {capitalize(key)}
                  </span>

                  <div className={styles.header__input_options_item_counter}>
                    <button
                      className={styles.header__input_options_item_button}
                      onClick={() =>
                        onOptionChange(key as keyof typeof options, false)
                      }
                      disabled={value === 0}
                    >
                      -
                    </button>

                    <span className={styles.header__input_options_item_value}>
                      {value}
                    </span>

                    <button
                      className={styles.header__input_options_item_button}
                      onClick={() =>
                        onOptionChange(key as keyof typeof options, true)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </label>
      </div>

      <button className={styles.header__login_button}>Search</button>
    </section>
  );
};

export default HeaderSearch;
