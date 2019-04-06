import React from 'react';
import MegaMenu from './components/MegaMenu';
import menuData from './resources/menu.json';
import './styles/App.scss';

const App: React.FunctionComponent = () => (
  <>
    <MegaMenu {...menuData} />
    {/* TODO: add some background here */}
  </>
);

export default App;
