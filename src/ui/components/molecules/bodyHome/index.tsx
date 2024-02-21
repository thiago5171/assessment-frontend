import Catergory from "../../../../core/domain/models/Category";
import TopMenu from "../menu/topMenu";
import styles from "./styles.module.scss";

interface BodyProps {
  categories: Catergory[];
}

function Body({ categories }: BodyProps) {
  return (
    <div className={styles.container}>
      <TopMenu categories={categories} />
    </div>
  );
}

export default Body;