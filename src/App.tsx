import React, { Component } from 'react';
import './App.css';
import MegaMenu from './MegaMenu';
import menuData from './resources/menu.json';

class App extends Component {
  render() {
    return (
      <MegaMenu {...menuData} />
    );
  }
}

export default App;
