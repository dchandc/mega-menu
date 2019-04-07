import React from 'react';
import '../styles/Layout.scss';
import Wallpaper from './Wallpaper';

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="layout">
    <div className="container">
      {children}
    </div>
    <Wallpaper />
  </div>
);

export default Layout;
