import Catergory from "../../../../core/domain/models/Category"; 
import TopMenu from "../menu/topMenu";
import NavigateSelector from "../navigateSelector";
import styles from "./styles.module.scss";

interface BodyProps {
  selectedCategory?: Catergory;
 
}

function Body({ selectedCategory }: BodyProps) {

  return (
    <div className={styles.container}>
      <TopMenu  selectedCategory={selectedCategory} />
      <NavigateSelector selectedCategory={selectedCategory}/>

    </div>
  );
}

export default Body;