import React from "react";

const ToDoEntry = ({ handleSubmit, todo, setTodo, editId }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="What are we doing today?"
      />
      <button type="submit">{editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default ToDoEntry;
