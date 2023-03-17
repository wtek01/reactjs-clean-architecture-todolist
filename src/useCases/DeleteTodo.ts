import { TodoRepository } from "../repositories/TodoRepository";

export const deleteTodo = async (
  todoRepository: TodoRepository,
  todoId: number
): Promise<void> => {
  return todoRepository.deleteTodoById(todoId);
};
