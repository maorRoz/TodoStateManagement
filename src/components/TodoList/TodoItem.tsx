import styled from "styled-components";

const TodoItemLayout = styled.li`
  list-style-type: none;

  height: 30px;
  width: 500px;
  padding: 12px 10px 8px;
  border-bottom: 1px solid rgb(211, 202, 202);
`;

export type TodoItemProps = {
  value: string;
};

export const TodoItem: React.FC<TodoItemProps> = ({  value }) => (
  <TodoItemLayout>{value}</TodoItemLayout>
);
