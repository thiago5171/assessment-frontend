import ContactPage from "../molecules/pagesContent/contact";
import GenericPage from "../molecules/pagesContent/generic";
import HomePage from "../molecules/pagesContent/homePage";

export interface Route {
    name?: string;
    path: string;
    page?: () => JSX.Element;
}

const routes: Route[] = [
    {
        name: "Página inicial",
        path: "pagina-inicial",
        page: HomePage
    },
    {
        name: "Contato",
        path: "contato",
        page: ContactPage
    },
    {
        path: "generic",
        page: GenericPage
    }
]; 
export default routes;