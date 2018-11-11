// Vendor
import React, {Component} from 'react';
import {compose} from 'recompose';

// Vendor components
import {Route, Switch} from 'react-router-dom';

// Components
import Authenticated from 'doggo-web-webapp/ui/authenticated';
import Public from 'doggo-web-webapp/ui/public';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

// Interfaces
export class Application extends Component<EnhancedProps> {
  public render() {
    return (
      <Switch>
        <Route path="/login" component={Public} />
        <Route component={Authenticated} />
      </Switch>
    );
  }
}

export default enhance(Application);
