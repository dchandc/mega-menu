import React from 'react';
import menuData from '../resources/menu.json';
import '../styles/App.scss';
import Layout from './Layout';
import MegaMenu from './MegaMenu';

const App: React.FunctionComponent = () => (
  <Layout>
    <MegaMenu {...menuData} />
  </Layout>
);

export default App;
