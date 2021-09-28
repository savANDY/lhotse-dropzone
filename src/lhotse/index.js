import React, {useState} from 'react';
import './index.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import Home from './home/Home';

import {Layout, notification} from 'antd';
import NotFound from "../common/NotFound";
import AppHeader from "../common/AppHeader";
import LoadingIndicator from "../common/LoadingIndicator";

const {Content} = Layout;

notification.config({
  placement: 'topRight',
  top: 70,
  duration: 3,
});

function Lhotse() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  if(isLoading) {
    return <LoadingIndicator />;
  }
  return (
      <Layout className="app-container">
        <AppHeader />
        <Content className="app-content">
          <div className="container">
            <Switch>
              <Route exact path="/"
                     render={(props) =>
                         <Home {...props} />
                     }>
              </Route>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Content>
      </Layout>

  )
}

export default withRouter(Lhotse);
