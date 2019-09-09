import React, { Component } from 'react'; // สำคัญ
import logo from './logo.svg';
import './App.css';

let x = 10;
class App extends Component {
  render() {

    return (
      <div className="App">
        Hello world {x}
      </div>
    );

  }

}

export default App; //export ออกไปๆ 
