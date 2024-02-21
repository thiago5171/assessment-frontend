import Catergory from "../../../../../core/domain/models/Category";
import styles from "./styles.module.scss";

interface TopMenuProps {
    categories: Catergory[];
}
function TopMenu({ categories }: TopMenuProps) {
  return (
    <div className={styles.container}> 
     <div className={styles.item} > Página inicial   </div>
      {categories.map((category) => (
        <div className={styles.item} key={category.id}>{category.name}</div>
        ))}
    </div>
  );
}

export default TopMenu;