import Catergory from "../../domain/models/Category";
import ICategoryAdapter from "../adapters/ICategoryAdapter";

abstract class ICategoryUsecase {
    constructor(protected readonly adapter: ICategoryAdapter) {}

    abstract list(): Promise<Catergory[]>;
}

export default ICategoryUsecase;