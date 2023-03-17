import React from "react";
import { Todo } from "../../entities/Todo";
import "./TodoList.css";

interface TodoItemProps {
  todo: Todo;
  onUpdateDoneStatus: (todoId: number, done: boolean) => void;
  onDelete: (todoId: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdateDoneStatus,
  onDelete
}) => {
  const handleDoneStatusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onUpdateDoneStatus(todo.id, event.target.checked);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <li className={`todo-item${todo.done ? " done" : ""}`}>
      <div className="todo-item-header">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleDoneStatusChange}
        />
        <h2>{todo.title}</h2>
        <button className="delete-button" onClick={handleDeleteClick}>
          X
        </button>
      </div>
      <p className="todo-item-description">{todo.description}</p>
    </li>
  );
};

export default TodoItem;
