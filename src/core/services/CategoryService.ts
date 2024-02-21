import Catergory from "../domain/models/Category";
import ICategoryUsecase from "../interfaces/usecases/ICategoryUsecase";

class CategoryService extends ICategoryUsecase {

  list(): Promise<Catergory[]> {
    return this.adapter.list();
  }

}

export default CategoryService;
