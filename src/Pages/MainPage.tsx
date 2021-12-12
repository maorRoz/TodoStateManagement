import { SearchBar } from "../components/SearchBar";
import { TodoHeader } from "../components/TodoHeader";
import { TodoList } from "../components/TodoList";

export type MainPageProps = {
  items: { itemId: string; value: string }[];
};

export const MainPage: React.FC<MainPageProps> = ({ items }) => (
  <div>
    <TodoHeader>Todo List</TodoHeader>
    <SearchBar />
    <TodoList items={items} />
  </div>
);
