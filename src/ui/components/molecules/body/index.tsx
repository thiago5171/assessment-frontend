import TopMenu from "../menu/topMenu";
import NavigateSelector from "../navigateSelector";
import styles from "./styles.module.scss";

interface BodyProps {
}

function Body({  }: BodyProps) {
  return (
    <div className={styles.container}>
      <TopMenu   />
      <NavigateSelector />

    </div>
  );
}

export default Body;