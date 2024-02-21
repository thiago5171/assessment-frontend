import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.textSubline}>Acesse sua conta </p>
        <p className={styles.text}> ou </p>
        <p className={styles.textSubline}> Cadastre-se</p>
      </div>
    </div>
  );
}

export default Header;
