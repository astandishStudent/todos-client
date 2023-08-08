import React, { useState } from "react";
import ToDoEntry from "./components/ToDoEntry";
import ToDoGroup from "./components/ToDoGroup";
import bgVid from "./computing.mp4";
import "./App.css";

const App = () => {
  //CRUD operations before return block
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
      return;
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div class="container overlay">
        <video autoPlay loop muted src={bgVid} />
        <div className="content">
          <h2>Todo List App</h2>
          <ToDoEntry
            handleSubmit={handleSubmit}
            todo={todo}
            editId={editId}
            setTodo={setTodo}
          />
          <ToDoGroup
            todos={todos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
