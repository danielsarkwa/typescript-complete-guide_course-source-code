import React from 'react';
import {connect} from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers/index';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
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
  { fetchTodos }
)(_App);