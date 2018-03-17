import type Todo from '../types/todo';
import {
  CREATE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from '../actions/action-types';
import initialState from '../store/initial-state';
import type TodoAction from '../actions/todo-actions';

export default function (state: Todo[] = initialState.todos, action: TodoAction): Todo[] {
  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return [...state, Object.assign({}, action.payload)];

    case UPDATE_TODO_SUCCESS:
      return [...state.filter(t => t.id !== action.payload.id), Object.assign({}, action.payload)];

    case DELETE_TODO_SUCCESS:
      return [...state.filter(t => t.id !== action.payload)];

    default:
      return state;
  }
}
