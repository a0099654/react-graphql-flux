import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div><h3>Hello World?</h3></div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
