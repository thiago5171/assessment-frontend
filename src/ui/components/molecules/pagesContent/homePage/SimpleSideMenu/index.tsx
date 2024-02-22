import { useCategories } from "../../../../../contexts/category/hooks";
import styles from "./styles.module.scss";

function SimpleSideMenu() {
  const categories = useCategories();
  
  return (
      <div className={styles.sideMenu}>
        <div className={styles.menuList}>
          <li>Página inicial</li>
          {categories.map((category) => {
            return <li key={category.id}>{category.name}</li>;
          })}
          <li>Contato</li>
        </div>
      </div>
  );
}

export default SimpleSideMenu;
