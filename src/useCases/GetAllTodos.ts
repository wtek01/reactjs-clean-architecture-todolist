import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export const getAllTodos = async (
  todoRepository: TodoRepository
): Promise<Todo[]> => {
  return todoRepository.getAllTodos();
};
