import Product from "../domain/models/Product";
import IProductUsecase from "../interfaces/usecases/IProductUsecase";


class ProductService extends IProductUsecase {

    listByCategory(id: number): Promise<Product[]> {
    return this.adapter.listByCategory(id);
  }
  
}

export default ProductService;