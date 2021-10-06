import React, {useState} from 'react';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import Home from './home/Home';
import NotFound from "../common/NotFound";
import AppHeader from "../common/AppHeader";
import LoadingIndicator from "../common/LoadingIndicator";
import {Container} from "reactstrap";
import './index.css'
import {AlertLhotse} from "../components/alert";

function Lhotse() {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  if(isLoading) {
    return <LoadingIndicator />;
  }
  return (
      <Container className="app-container">
        <AppHeader />
        <Container className="appContent">
          <AlertLhotse />
            <Switch>
              <Route exact path="/"
                     render={(props) =>
                         <Home {...props} />
                     }>
              </Route>
              <Route component={NotFound}/>
            </Switch>
        </Container>
      </Container>

  )
}

export default withRouter(Lhotse);
