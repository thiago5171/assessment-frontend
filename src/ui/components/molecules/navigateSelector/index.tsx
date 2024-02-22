import { homePage } from "../../../../core/static/extraCategories";
import { useSelectedCategory } from "../../../contexts/category/hooks"
import routes, { Route } from ".././../navigate/index"

function NavigateSelector() {
    const  selectCategory = useSelectedCategory();
    let page: Route = routes.find((route) => route.path === homePage.path)  as Route;
    if(selectCategory !== undefined) {
        page = routes.find((route) => route.path === selectCategory?.path) ?? 
        routes.find((route) => route.path === 'generic') as Route;
    }

    return (
        <>
            {page && page.page && page.page()}
        </>
    )
}

export default NavigateSelector