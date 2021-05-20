import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos }) => {
  console.log(todos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
