import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers/index';
import { Todo, fetchTodos, deleteTodo } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING': null}
        {this.renderList()}
      </div>
    );
  }
}

// connect our redux-state to our component props
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos }
}

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App)