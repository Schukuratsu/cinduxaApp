import { Typewriter } from "components/Typewriter";
import { useCallback, useState } from "react";
import styles from "./Menu.module.css";
import { MenuItem } from "components/MenuItem";
import { BackToMenu } from "components/BackToMenu";

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
        {areMenuItemsShowing && (
          <main className={styles.menuContainer}>
            <MenuItem>Tiragem virtual</MenuItem>
            <MenuItem>Interpretação das cartas</MenuItem>
            <MenuItem>Decks de Tarô</MenuItem>
            <MenuItem>Conselhos e Orientações</MenuItem>
            <MenuItem>Interação e Conversação Amigável</MenuItem>
          </main>
        )}
      </div>
    </>
  );
}
