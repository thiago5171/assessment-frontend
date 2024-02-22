import StructProduct from "../../domain/models/StructProduct";
 
abstract class IProductAdapter {
    abstract listByCategory(id: string): Promise<StructProduct>;
}

export default IProductAdapter;