import Catergory from "../../../../core/domain/models/Category";
import { homePage } from "../../../../core/static/extraCategories";
import routes, { Route } from ".././../navigate/index";
interface NavigateSelectorProps {
  selectedCategory?: Catergory;
}

function NavigateSelector({ selectedCategory }: NavigateSelectorProps) {
  let page: Route = routes.find(
    (route) => route.path === homePage.path
  ) as Route;
  if (selectedCategory !== undefined) {
    page =
      routes.find((route) => route.path === selectedCategory?.path) ??
      (routes.find((route) => route.path === "generic") as Route);
  }

  return <>{page && page.page && page.page()}</>;
}

export default NavigateSelector;
