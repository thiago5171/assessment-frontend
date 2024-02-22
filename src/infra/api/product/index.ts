import StructProduct from "../../../core/domain/models/StructProduct";
import DTO from "../../../core/domain/types/http/DTO";
import IProductAdapter from "../../../core/interfaces/adapters/IProductAdapter";
import BackendClient from "../client";

class ProductAPI extends IProductAdapter {

  async listByCategory(id: string ): Promise<StructProduct> {
    const response = await BackendClient.get<DTO>(`/categories/${id}`);

    return StructProduct.fromJSON(response.data);
  }

}

export default ProductAPI;