import styles from "./Home.module.css";
import { CinduxaTablet } from "components/CinduxaTablet";
import { Typewriter } from "components/Typewriter";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [isButtonShowing, setIsButtonShowing] = useState(false);

  const onWriteFinish = useCallback(() => setIsButtonShowing(true), []);

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
        {isButtonShowing && (
          <Link to="/menu">
            <button className={styles.startButton}>Começar tour</button>
          </Link>
        )}
      </main>
    </>
  );
}
