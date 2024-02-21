import Product from "../../domain/models/Product";

abstract class IProductAdapter {
    abstract listByCategory(id: number): Promise<Product[]>;
}

export default IProductAdapter;