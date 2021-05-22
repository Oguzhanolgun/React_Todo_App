import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Oguzhan's Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        onSetTodos={setTodos}
        onSetInputText={setInputText}
        onSetStatus={setStatus}
      />
      <TodoList filterTodos={filterTodos} onSetTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
