import {
  useCategories,
  useSelectCategory,
  useSelectedCategory,
} from "../../../../contexts/category/hooks";
import {
  useListByCtegory,
} from "../../../../contexts/product/hooks";
import styles from "./styles.module.scss";

interface SideMenuProps {}

function SideMenu({}: SideMenuProps) {
  const categories = useCategories();
  const defineCategory = useSelectCategory();
  const selectedCategory = useSelectedCategory();
  const listProducts = useListByCtegory();

  const handleCategory = (category: any) => {
    defineCategory(category).then(() => {
      if (selectedCategory != undefined && listProducts) {
        listProducts(selectedCategory.id);
      }
    });
  };

  return (
    <div className={styles.sideMenu}>
      <h1 className={styles.title}>FILTRE POR</h1>

      <div className={styles.menuList}>
        <h2 className={styles.subTitle}>CATEGORIAS</h2>

        <div>
          {categories.map((category) => {
            return (
              <li className={styles.itemList} onClick={() => handleCategory(category)} key={category.id}>
                {category.name}
              </li>
            );
          })}
        </div>

      </div>

      <div className={styles.menuList}>
        <h2 className={styles.subTitle}>CORES</h2>

        <div className={styles.menuListColor}>
          <div className={styles.colorRed} />
          <div className={styles.colorOrange} />
          <div className={styles.colorGreen} />
        </div>

      </div>

      <div className={styles.menuList}>
        <h2 className={styles.subTitle}>GÊNERO</h2>
        <div>
          <li className={styles.itemList} >Masculino</li>
          <li className={styles.itemList} >Feminino</li>
        </div>
        

    </div>
    </div>
  );
}

export default SideMenu;
