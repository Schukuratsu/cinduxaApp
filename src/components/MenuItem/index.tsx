import styles from "./MenuItem.module.css";

type Props = {
  children: React.ReactNode;
};

export function MenuItem({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
