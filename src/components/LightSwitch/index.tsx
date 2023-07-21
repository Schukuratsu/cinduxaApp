import { ChangeEvent, useCallback, useState } from "react";
import cx from "classnames";
import styles from "./LightSwitch.module.css";

export function LightSwitch() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt);
    return setIsDarkModeActive(evt.currentTarget.checked);
  }, []);

  return (
    <div className={styles.container}>
      <label className={cx([styles.switch])}>
        <input
          className={styles.input}
          type="checkbox"
          checked={isDarkModeActive}
          onChange={onChange}
        />
        <span className={cx([styles.slider, styles.round])}></span>
      </label>
    </div>
  );
}
