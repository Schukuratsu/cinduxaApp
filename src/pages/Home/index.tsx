import styles from "./Home.module.css";
import { CinduxaTablet } from "components/CinduxaTablet";
import { Typewriter } from "components/Typewriter";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [isButtonHidden, setIsButtonHidden] = useState(true);

  const onWriteFinish = useCallback(() => setIsButtonHidden(false), []);

  return (
    <>
      <main className={styles.container}>
        <div>
          <CinduxaTablet />
          <h2 className={styles.shadow}>
            <Typewriter
              text="Olá! Eu sou a Cinduxa, sua taróloga virtual!"
              delay={100}
              onFinish={onWriteFinish}
            />
          </h2>
        </div>

        <Link
          to="/menu"
          className={[
            styles.menuLink,
            isButtonHidden ? styles.hidden : "",
          ].join(" ")}
        >
          <button className={styles.startButton}>Começar tour</button>
        </Link>
      </main>
    </>
  );
}
