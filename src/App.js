import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Oguzhan's Todo List {inputText} </h1>
      </header>
      <Form onSetInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
