// Vendor
import React, {Component} from 'react';
import {compose} from 'recompose';

// Vendor components
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Authenticated from 'doggo/ui/authenticated';
import Public from 'doggo/ui/public';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo/context';

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

// Interfaces
export class Application extends Component<EnhancedProps> {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Public} />
          <Route component={Authenticated} />
        </Switch>
      </Router>
    );
  }
}

export default enhance(Application);
