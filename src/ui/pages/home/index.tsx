import { useEffect } from "react";
import { useCategories, useListCategories } from "../../contexts/category/hooks";

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
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;

 