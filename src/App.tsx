import React, { Component } from 'react';
import MegaMenu from './components/MegaMenu';
import menuData from './resources/menu.json';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <MegaMenu {...menuData} />
    );
  }
}

export default App;
