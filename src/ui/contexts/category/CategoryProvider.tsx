import { useCallback, useMemo, useState } from "react";
import { CategoryCTX } from ".";
import Category from "../../../core/domain/models/Category";
import CategoryService from "../../../core/services/CategoryService";
import CategoryAPI from "../../../infra/api/category";

function CategoryProvider({ children }: React.PropsWithChildren) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const usecase  = useMemo(() => new CategoryService(new CategoryAPI()), [])
    const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();

    const  list = useCallback(async () =>{
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
    }, []);

    // selectCategory: (category: Category) => void
    // selectedCategory: C
    const selectCategory = useCallback(async (category: Category) => {
        setLoading(true);
        if(categories.length == 0) await list();
        

        if(categories.length > 0){
            setSelectedCategory(categories.find((c) => c.id === category.id) || undefined);
        }else {
            setSelectedCategory(category);
        }
        setLoading(false);
    }, []);

    return (
        <CategoryCTX.Provider value={{ list, categories, loading, selectCategory, selectedCategory }}>
            {children}
        </CategoryCTX.Provider>
    );
}

export default CategoryProvider;