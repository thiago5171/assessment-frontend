import { useMemo, useState } from "react";
import { CategoryCTX } from ".";
import Category from "../../../core/domain/models/Category";
import CategoryService from "../../../core/services/CategoryService";
import CategoryAPI from "../../../infra/api/category";

function CategoryProvider({ children }: React.PropsWithChildren) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const usecase  = useMemo(() => new CategoryService(new CategoryAPI()), [])

    async function list() {
        setLoading(true);
        try {
            const data = await usecase.list();
            setCategories(data);
        } catch (error) {
            console.error(error);
            setCategories([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <CategoryCTX.Provider value={{ list, categories, loading }}>
            {children}
        </CategoryCTX.Provider>
    );
}

export default CategoryProvider;