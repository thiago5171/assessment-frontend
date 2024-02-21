import { useMemo, useState } from "react";
import { ProductCTX } from ".";
import Product from "../../../core/domain/models/Product";
import ProductService from "../../../core/services/ProductService";
import ProductAPI from "../../../infra/api/product";


function ProductProvider({ children }: React.PropsWithChildren) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const usecase  = useMemo(() => new ProductService(new ProductAPI()), [])

    async function listByCategory(id: number) {
        setLoading(true);
        try {
            const data = await usecase.listByCategory(id);
            setProducts(data);
        } catch (error) {
            console.error(error);
            setProducts([]);
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