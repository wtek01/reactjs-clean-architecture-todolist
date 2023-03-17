import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export const addNewTodo = async (
  todoRepository: TodoRepository,
  todo: Todo
): Promise<Todo> => {
  return todoRepository.addNewTodo(todo);
};
