import Product from "../../../../core/domain/models/Product";
import Button from "../../atoms/button";
import ImageItem from "../../atoms/imageItem";

interface ProductProps {
  item: Product;
}

function ProductItem({ item }: ProductProps) {
  return (
    <div>
        <ImageItem
        baseUrl={"/assets/"}
        src={item.image}
        alt={item.name}
      />
      <p>{item.name}</p>
      <p>{item.price}</p>
        <Button>COMPRAR</Button>
    </div>
  );
}

export default ProductItem;
