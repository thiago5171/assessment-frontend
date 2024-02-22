import Breadcrumb from "../../../atoms/breadcrumb";
import SideMenu from "../../menu/sideMenu";
import styles from "./styles.module.scss";

function GenericPage() {

  return (
    <div className={styles.container}>
      <Breadcrumb />
    <SideMenu />
  <div> 
    
  </div>
</div>
  );
}

export default GenericPage;