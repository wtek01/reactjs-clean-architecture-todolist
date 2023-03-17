import React, { useState } from "react";

type TodoFormProps = {
  onAddTodo: (description: string) => void;
};

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim() !== "") {
      onAddTodo(description.trim());
      setDescription("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="description">Add a new todo:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter todo description"
      />
      <button type="submit">Add</button>
    </form>
  );
};
