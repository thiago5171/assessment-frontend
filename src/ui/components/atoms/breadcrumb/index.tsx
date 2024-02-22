import { useSelectedCategory } from "../../../contexts/category/hooks";
import styles from "./styles.module.scss";

function Breadcrumb() {
  const selectedCategory = useSelectedCategory();
  
  return (
    <div className={styles.container}>
      <div className={styles.prefixText}>Página inicial </div>{" "}
      <div className={styles.textDefault}>{"  >  "}</div>{" "}
      <div className={styles.categoryName}>{selectedCategory?.name}</div>
    </div>
  );
}

export default Breadcrumb;
