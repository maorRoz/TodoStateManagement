import axios from "axios";
import { observer, useLocalObservable } from "mobx-react";
import { useEffect } from "react";
import { MainPage } from "../Pages/MainPage";

export const MainPageMobx = observer(() => {
  const todoItems = useLocalObservable(() => ({
    items: [],
    async fetchItems() {
      const response = await axios.get("/items");
      this.items = response.data;
    },
  }));

  useEffect(() => {
    todoItems.fetchItems();
  },[todoItems]);

  return <MainPage items={todoItems.items} />;
});
