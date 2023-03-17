import { Todo } from "../entities/Todo";

export interface TodoRepository {
  getAllTodos(): Promise<Todo[]>;
  addNewTodo(todo: Todo): Promise<Todo>;
  updateTodoDoneStatus(todoId: number, done: boolean): Promise<Todo>;
  deleteTodoById(todoId: number): Promise<void>;
}
