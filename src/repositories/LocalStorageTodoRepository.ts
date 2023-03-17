import { Todo } from "../entities/Todo";
import { TodoRepository } from "./TodoRepository";

export const LocalStorageTodoRepository: TodoRepository = {
  getAllTodos: async () => {
    const todosString = localStorage.getItem("todos");
    if (todosString) {
      return JSON.parse(todosString);
    } else {
      return [];
    }
  },

  addNewTodo: async (todo) => {
    const todos = await LocalStorageTodoRepository.getAllTodos();
    const newTodo = { ...todo, id: Date.now() };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    return newTodo;
  },

  updateTodoDoneStatus: async (todoId, done) => {
    const todos = await LocalStorageTodoRepository.getAllTodos();
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    if (todoToUpdate) {
      const updatedTodo = { ...todoToUpdate, done };
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? updatedTodo : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodo;
    } else {
      throw new Error(`Todo with id ${todoId} not found`);
    }
  },

  deleteTodoById: async (todoId) => {
    const todos = await LocalStorageTodoRepository.getAllTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
};
