import Product from "../../../core/domain/models/Product";
import DTO from "../../../core/domain/types/http/DTO";
import IProductAdapter from "../../../core/interfaces/adapters/IProductAdapter";
import BackendClient from "../client";

class ProductAPI extends IProductAdapter {

  async listByCategory(id: number ): Promise<Product[]> {
    const response = await BackendClient.get<{items: DTO[]}>(`/categories/${id}`);

    return response.data.items.map(Product.fromJSON);
  }

}

export default ProductAPI;