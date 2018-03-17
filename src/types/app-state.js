// @flow
import type { Todo } from './todo';

export type AppState = {
  +todos: Todo[],
};
