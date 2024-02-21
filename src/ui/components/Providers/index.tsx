import { PropsWithChildren } from "react";
import ProductProvider from "../../contexts/product/ProductProvider";
import CategoryProvider from "../../contexts/category/CategoryProvider";

function Providers({ children }: PropsWithChildren) {
  return (
    <ProductProvider>
      <CategoryProvider>{children} </CategoryProvider>
    </ProductProvider>
  );
}

export default Providers;
