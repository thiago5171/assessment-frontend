import { useEffect } from "react";
import {
  useListCategories,
} from "../../contexts/category/hooks";
import Header from "../../components/molecules/header";
import styles from "./styles.module.scss";
import Body from "../../components/molecules/body";

function Home() {
  const list = useListCategories();

  useEffect(() => {
    if (list) {
      list();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
}

export default Home;
