import * as React from 'react';
import List from 'material-ui/List';
import type { Todo } from '../../types/todo';
import TodoListRow from './todo-list-row';

type Props = {
  todos: Todo[],
  onDelete: Function,
};

const TodoList = ({ todos, onDelete }: Props) => (
  <div>
    {todos.map(todo => (
      <List key={todo.id}>
        <TodoListRow todo={todo} onDelete={onDelete} />
      </List>
    ))}
  </div>
);

export default TodoList;
