import StructProduct from "../domain/models/StructProduct";
import IProductUsecase from "../interfaces/usecases/IProductUsecase";


class ProductService extends IProductUsecase {

    listByCategory(id: string): Promise<StructProduct> {
    return this.adapter.listByCategory(id);
  }
  
}

export default ProductService;