import { useMemo, useState } from "react";
import { ProductCTX } from ".";
import ProductService from "../../../core/services/ProductService";
import ProductAPI from "../../../infra/api/product";
import StructProduct from "../../../core/domain/models/StructProduct";


function ProductProvider({ children }: React.PropsWithChildren) {
    const [products, setProducts] = useState<StructProduct | undefined>();
    const [loading, setLoading] = useState(false);

    const usecase  = useMemo(() => new ProductService(new ProductAPI()), [])

    async function listByCategory(id: string) {
        setLoading(true);
        try {
            const data = await usecase.listByCategory(id);
            setProducts(data);
        } catch (error) {
            console.error(error);
            setProducts(undefined);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ProductCTX.Provider value={{ listByCategory, products, loading }}>
            {children}
        </ProductCTX.Provider>
    );
}

export default ProductProvider;