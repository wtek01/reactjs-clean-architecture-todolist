import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export const updateTodoDoneStatus = async (
  todoRepository: TodoRepository,
  todoId: number,
  done: boolean
): Promise<Todo> => {
  return todoRepository.updateTodoDoneStatus(todoId, done);
};
