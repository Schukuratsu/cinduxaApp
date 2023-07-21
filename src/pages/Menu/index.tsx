import { Typewriter } from "components/Typewriter";
import { useCallback, useState } from "react";
import { MenuItem } from "components/MenuItem";
import { BackToMenu } from "components/BackToMenu";
import styles from "./Menu.module.css";
import cx from "classnames";

export function Menu() {
  const [areMenuItemsShowing, setAreMenuItemsShowing] = useState(false);

  const onWriteFinish = useCallback(() => setAreMenuItemsShowing(true), []);

  return (
    <>
      <div className={styles.container}>
        <BackToMenu />
        <header>
          <h2>
            <Typewriter
              text="Escolha o que você quer fazer!"
              delay={100}
              onFinish={onWriteFinish}
            />
          </h2>
        </header>

        <main
          className={cx([
            styles.menuContainer,
            "hiddenTransition",
            areMenuItemsShowing || "hidden",
          ])}
        >
          <MenuItem>Tiragem virtual</MenuItem>
          <MenuItem>Interpretação das cartas</MenuItem>
          <MenuItem>Decks de Tarô</MenuItem>
          <MenuItem>Conselhos e Orientações</MenuItem>
          <MenuItem>Interação e Conversação Amigável</MenuItem>
        </main>
      </div>
    </>
  );
}
