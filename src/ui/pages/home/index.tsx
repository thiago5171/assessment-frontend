import { useEffect } from "react";
import { useCategories, useListCategories } from "../../contexts/category/hooks";
import Header from "../../components/molecules/header";
import styles from './styles.module.scss';
import Body from "../../components/molecules/bodyHome";

function Home() {
    const data = useCategories();
    const list = useListCategories();

    useEffect(() => {
        if (list) {
        list();
        }
    }, []);
    console.log(data);
  return (
    <div className={styles.container}   >
        <Header></Header>
        <Body categories={data}/>
    </div>
  );
}

export default Home;

 