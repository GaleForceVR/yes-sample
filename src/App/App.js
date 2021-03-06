import React, { Component } from 'react';
import './App.css';
import HomePage from './../HomePage';
import GlobalLayout from './../Containers/GlobalLayout/GlobalLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalLayout>
            <HomePage />
        </GlobalLayout>
      </div>
    );
  }
}

export default App;
