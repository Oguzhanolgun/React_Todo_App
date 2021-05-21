import React from "react";
const Todo = ({ text, todos, onSetTodos, todo }) => {
  console.log("sssss" + text);
  const deleteHandler = () => {
    onSetTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    onSetTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
