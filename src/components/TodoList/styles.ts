import styled from "styled-components";

export const TodoListLayout = styled.ul`
  display: flex;
  flex-direction: column;

  width: fit-content;
  padding: 0;
  border-radius: 5px;
  margin: 100px auto 0;

  align-items: center;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  li:last-child {
    border-bottom: none;
  }
`;
