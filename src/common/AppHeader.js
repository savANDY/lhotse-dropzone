import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import './AppHeader.css';
import {Layout} from 'antd';

function AppHeader() {
  const Header = Layout.Header;

    return (
        <Header className="app-header">
          <div className="container">
            <div className="app-title">
              <Link to="/">Lhotse!</Link>
            </div>
          </div>
        </Header>
    );
}

export default withRouter(AppHeader);
