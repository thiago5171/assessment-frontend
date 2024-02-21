import Category from "../../../core/domain/models/Category";
import DTO from "../../../core/domain/types/http/DTO";
import ICategoryAdapter from "../../../core/interfaces/adapters/ICategoryAdapter";
import BackendClient from "../client";

class CategoryAPI extends ICategoryAdapter {

    async list(): Promise<Category[]> {
        const response = await BackendClient.get<{items: DTO[]}>(`/categories/list`);

        return response.data.items.map(Category.fromJSON);
    }

}

export default CategoryAPI;