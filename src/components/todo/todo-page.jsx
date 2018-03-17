// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import uuidv1 from 'uuid/v1';
import TodoList from './todo-list';
import TodoForm from './todo-form';
import * as todoActions from '../../actions/todo-actions';
import type { Todo } from '../../types/todo';
import type { AppState } from '../../types/app-state';

type Props = {
  todos: Array<Todo>,
  actions: Object,
};

type State = {
  todo: Todo,
};

class TodoPage extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = { todo: { id: '', name: '', isDone: false } };

    this.updateTodoState = this.updateTodoState.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateTodoState = (event): void => {
    const field = event.target.name;
    const todo = Object.assign({}, this.state.todo);
    todo[field] = event.target.value;

    return this.setState({ todo });
  };

  addTodo = (): void => {
    const todo = Object.assign({}, this.state.todo);
    todo.id = uuidv1();
    todo.isDone = false;

    this.props.actions.createTodo(todo);
  };

  deleteTodo = (todoId: string): void => {
    this.props.actions.deleteTodo(todoId);
  };

  render() {
    return (
      <div>
        <Paper>
          <TodoList todos={this.props.todos} onDelete={this.deleteTodo} />
        </Paper>
        <Paper>
          <TodoForm onChange={this.updateTodoState} onSubmit={this.addTodo} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): Props => ({
  todos: state.todos,
  actions: {},
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
