import { TodoListLayout } from "./styles";
import { TodoItem } from "./TodoItem";

export type TodoListProps = {
  items: { itemId: string; value: string }[];
};

export const TodoList: React.FC<TodoListProps> = ({ items }) => (
  <TodoListLayout>
    <TodoItem value="blabla" />
    {items.map((item) => (
      <TodoItem key={item.itemId} value={item.value} />
    ))}
  </TodoListLayout>
);
