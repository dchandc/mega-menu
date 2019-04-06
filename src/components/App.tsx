import React from 'react';
import MegaMenu from './MegaMenu';
import menuData from '../resources/menu.json';
import '../styles/App.scss';
import Layout from './Layout';

const App: React.FunctionComponent = () => (
  <Layout>
    <MegaMenu {...menuData} />
    {/* TODO: add some background here */}
  </Layout>
);

export default App;
