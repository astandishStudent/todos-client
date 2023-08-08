import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";

export default function ToDoGroup({ todos, handleDelete, handleEdit }) {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button className="button-edit" onClick={() => handleEdit(t.id)}>
            <FiEdit3 />
          </button>
          <button className="button-delete" onClick={() => handleDelete(t.id)}>
            <BsTrash3 />
          </button>
        </li>
      ))}
    </ul>
  );
}
