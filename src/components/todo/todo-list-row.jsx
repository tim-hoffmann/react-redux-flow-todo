import * as React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import type { Todo } from '../../types/todo';

type Props = {
  todo: Todo,
  onDelete: Function,
};

const TodoListRow = ({ todo, onDelete }: Props) => (
  <ListItem button onClick={() => onDelete(todo.id)}>
    <ListItemText primary={todo.name} />
  </ListItem>
);

export default TodoListRow;
