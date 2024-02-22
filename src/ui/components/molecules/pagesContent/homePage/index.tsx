import { HomePageTextBody } from "../../../../../core/static/texts";
import SimpleSideMenu from "./SimpleSideMenu";
import styles from "./styles.module.scss";

function HomePage() {
  return (
    <div className={styles.container}>
        <SimpleSideMenu />
      <div> 
        <div className={styles.block} />
        <p className={styles.textTitle}>Seja bem-vindo!</p>
        <p className={styles.textBody}>{HomePageTextBody}</p>
      </div>
    </div>
  );
}

export default HomePage;