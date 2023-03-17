import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

interface TodoListProps {
  todos: Todo[];
  onUpdateTodoDoneStatus: (todoId: number, done: boolean) => void;
  onDeleteTodo: (todoId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onUpdateTodoDoneStatus,
  onDeleteTodo
}) => {
  const handleUpdateTodoDoneStatus = (todoId: number, done: boolean) => {
    onUpdateTodoDoneStatus(todoId, done);
  };

  const handleDeleteTodo = (todoId: number) => {
    onDeleteTodo(todoId);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdateDoneStatus={handleUpdateTodoDoneStatus}
          onDelete={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
