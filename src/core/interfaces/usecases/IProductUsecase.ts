import Product from "../../domain/models/Product";
import IProductAdapter from "../adapters/IProductAdapter";

abstract class IProductUsecase {
    constructor(protected readonly adapter: IProductAdapter) {}

    abstract listByCategory(id: number): Promise<Product[]>;
}

export default IProductUsecase;