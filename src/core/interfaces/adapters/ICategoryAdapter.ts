import Category from "../../domain/models/Category";

abstract class ICategoryAdapter {
    abstract list(): Promise<Category[]>;
}

export default ICategoryAdapter;