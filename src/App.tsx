import React, { useState, useEffect } from "react";
import { Todo } from "./entities/Todo";
import { LocalStorageTodoRepository } from "./repositories/LocalStorageTodoRepository";
import { TodoRepository } from "./repositories/TodoRepository";
import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const todoRepository: TodoRepository = LocalStorageTodoRepository;
      const todos = await todoRepository.getAllTodos();
      setTodos(todos);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (description: string) => {
    const todoRepository: TodoRepository = LocalStorageTodoRepository;
    const newTodo = await todoRepository.addNewTodo({
      description,
      done: false
    });
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodoDoneStatus = async (id: number, done: boolean) => {
    const todoRepository: TodoRepository = LocalStorageTodoRepository;
    const updatedTodo = await todoRepository.updateTodoDoneStatus(id, done);
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleDeleteTodo = async (id: number) => {
    const todoRepository: TodoRepository = LocalStorageTodoRepository;
    await todoRepository.deleteTodoById(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <TodoList
          todos={todos}
          onUpdateTodoDoneStatus={handleUpdateTodoDoneStatus}
          onDeleteTodo={handleDeleteTodo}
        />
      )}
    </div>
  );
};

export default App;
