import { contact, homePage } from "../../../../../core/static/extraCategories";
import { useCategories, useSelectCategory } from "../../../../contexts/category/hooks";
import styles from "./styles.module.scss";

interface TopMenuProps {
    
}
function TopMenu({  }: TopMenuProps) {
  const categories = useCategories();
  const defineCategory = useSelectCategory();
   
  
  const handleCategory = (category: any) => {
    defineCategory(category).then();
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