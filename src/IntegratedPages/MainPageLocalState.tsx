import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MainPage } from "../Pages/MainPage";

export const MainPageLocalState = () => {
  const [items, setItems] = useState<{ itemId: string; value: string }[]>([]);

  const fetchItems = useCallback(async () => {
    const response = await axios.get("/items");

    setItems(response.data ?? []);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return <MainPage items={items} />;
};
