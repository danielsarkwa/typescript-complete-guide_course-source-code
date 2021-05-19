import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };
  
  render() {
    return <div>Hi there</div>;
  }
}

ReactDOM.render(
  <App color={'red'} />,
  document.querySelector('#root')
);