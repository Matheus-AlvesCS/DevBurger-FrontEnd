import { useEffect, useState } from "react";
import api from "../../services/api";

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("/categories");

      console.log(response);
    }

    getCategories();
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
    </div>
  );
}
