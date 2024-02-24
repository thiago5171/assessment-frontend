import Catergory from "../../../../../core/domain/models/Category";
import { contact, homePage } from "../../../../../core/static/extraCategories";
import { useCategories, useSelectCategory } from "../../../../contexts/category/hooks";
import { useListByCtegory } from "../../../../contexts/product/hooks";
import styles from "./styles.module.scss";

interface TopMenuProps {
  selectedCategory?: Catergory;

}
function TopMenu({ selectedCategory }: TopMenuProps) {
  const categories = useCategories();
  const defineCategory = useSelectCategory();
  const listProducts = useListByCtegory();

   
  
  const handleCategory = (category: any) => {
    defineCategory(category).then(()=>{
      if(selectedCategory != undefined && listProducts)
      {
        listProducts(selectedCategory.id);
      }
    });
  }

  return (
    <div className={styles.container}> 
     <div className={styles.item} onClick={()=> handleCategory(homePage)} >PÁGINA INICIAL</div>
      {categories.map((category) => (
        <div className={styles.item} onClick={()=>handleCategory(category)} key={category.id}>{category.name.toLocaleUpperCase()}</div>
        ))}
     <div className={styles.item} onClick={()=> handleCategory(contact)}  > CONTATO   </div>

    </div>
  );
}

export default TopMenu;