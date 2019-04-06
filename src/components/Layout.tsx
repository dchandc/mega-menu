import React from 'react';
import '../styles/Layout.scss';

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

export default Layout;
