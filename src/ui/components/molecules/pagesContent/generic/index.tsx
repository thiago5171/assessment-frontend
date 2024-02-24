import { useProducts } from "../../../../contexts/product/hooks";
import Breadcrumb from "../../../atoms/breadcrumb"; 
import SideMenu from "../../menu/sideMenu";
import ProductItem from "../../product";
import styles from "./styles.module.scss";

function GenericPage() {
  const selectedProdcut = useProducts();
  console.log(selectedProdcut);
  return (
    <div className={styles.container}>
      <Breadcrumb />
      <SideMenu />
        {selectedProdcut?.items.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
    </div>
  );
}

export default GenericPage;
