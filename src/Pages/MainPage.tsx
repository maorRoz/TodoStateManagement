import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TodoHeader } from "../components/TodoHeader";
import { TodoList } from "../components/TodoList";

export const MainPage = () => {
  const [items, setItems] = useState<{ itemId: string; value: string }[]>([]);

  const fetchItems = useCallback(async () => {
    const response = await axios.get("/items");

    setItems(response.data ?? []);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <TodoHeader>Todo List</TodoHeader>
      <SearchBar />
      <TodoList items={items} />
    </div>
  );
};
