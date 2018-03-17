import { CREATE_TODO_SUCCESS, UPDATE_TODO_SUCCESS, DELETE_TODO_SUCCESS } from './action-types';
import type Todo from '../types/todo';

export type CreateTodoSuccess = { type: CREATE_TODO_SUCCESS, payload: Todo };
export type UpdateTodoSuccess = { type: UPDATE_TODO_SUCCESS, payload: Todo };
export type DeleteTodoSuccess = { type: DELETE_TODO_SUCCESS, payload: string };

export type TodoAction = CreateTodoSuccess | UpdateTodoSuccess | DeleteTodoSuccess;

const createTodoSuccess = (todo: Todo): CreateTodoSuccess => ({
  type: CREATE_TODO_SUCCESS,
  payload: todo,
});

export function createTodo(todo: Todo) {
  return createTodoSuccess(todo);
}

const updateTodoSuccess = (todo: Todo): UpdateTodoSuccess => ({
  type: UPDATE_TODO_SUCCESS,
  payload: todo,
});

export function updateTodo(todo: Todo) {
  return updateTodoSuccess(todo);
}

const deleteTodoSuccess = (todoId: string): DeleteTodoSuccess => ({
  type: DELETE_TODO_SUCCESS,
  payload: todoId,
});

export function deleteTodo(todoId: string) {
  return deleteTodoSuccess(todoId);
}
