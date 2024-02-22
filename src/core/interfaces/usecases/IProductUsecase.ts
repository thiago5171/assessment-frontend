import StructProduct from "../../domain/models/StructProduct";
import IProductAdapter from "../adapters/IProductAdapter";

abstract class IProductUsecase {
    constructor(protected readonly adapter: IProductAdapter) {}

    abstract listByCategory(id: string): Promise<StructProduct>;
}

export default IProductUsecase;